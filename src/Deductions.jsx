import React, { useState, useEffect } from 'react';
import { AlertTriangle, Eye, CheckCircle, Circle, Info } from 'lucide-react';
import { judgingCriteria } from './data/judging-criteria.js';
import { weaponRegistry, getWeaponRequirements, mapCategoryToJudgingCriteria, hasSpecialHandling } from './data/weapon-registry.js';
import { movements } from './data/codes.js';
import { getNonConformityCriteria } from './data/combo-mappings.js';

const Deductions = ({ selectedNanduMovements = [], selectedFormMovements = {}, selectedWeaponForm = 'changquan' }) => {
  const [expandedSections, setExpandedSections] = useState({});

  // Get the appropriate requirements based on selected weapon form
  const currentRequirements = getWeaponRequirements(selectedWeaponForm) || getWeaponRequirements('changquan');


  // Get all selected movements from both pages
  const getAllSelectedMovements = () => {
    const movements = [];
    
    // Add selected movements from Nandu Calculator
    selectedNanduMovements.forEach(combo => {
      // Add individual movements
      combo.movements.forEach(movement => {
        movements.push({
          source: 'nandu',
          movement: movement,
          combo: combo.id
        });
      });
      
      // Add combo movement if it's a throw/catch combo (for deductions detection)
      if (combo.isThrowCatchCombo && combo.comboMovement) {
        movements.push({
          source: 'nandu',
          movement: combo.comboMovement,
          combo: combo.id
        });
      }
      
      // Check for combo non-conformity criteria based on connections
      combo.connections.forEach((connection, connectionIndex) => {
        const fromMovement = combo.movements[connectionIndex];
        const toMovement = combo.movements[connectionIndex + 1];
        
        if (fromMovement && toMovement) {
          const comboCriteria = getNonConformityCriteria(fromMovement.id, toMovement.id, judgingCriteria);
          if (comboCriteria) {
            // Create a virtual combo movement for this connection
            movements.push({
              source: 'nandu',
              movement: {
                id: `${fromMovement.id}-${toMovement.id}`,
                name: comboCriteria.chinese,
                english: comboCriteria.english,
                category: 'Combo Connection',
                isCombo: true,
                isConnectionCombo: true,
                non_conformity: comboCriteria.non_conformity || [],
                deductions: comboCriteria.deductions || [],
                chinese: comboCriteria.chinese,
                pinyin: comboCriteria.pinyin
              },
              combo: combo.id,
              connection: connection
            });
          }
        }
      });
      
    });

    // Add selected movements from Form Planner
    Object.keys(selectedFormMovements).forEach(key => {
      if (selectedFormMovements[key]) {
        // Parse the key to get category and index
        const [category, index] = key.split('-');
        movements.push({
          source: 'form',
          category: category,
          index: parseInt(index),
          key: key
        });
      }
    });

    return movements;
  };

  const selectedMovements = getAllSelectedMovements();
  

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Get relevant deductions for selected movements
  const getRelevantDeductions = () => {
    const relevantCriteria = new Map();
    const movementsWithoutCriteria = [];
    
    selectedMovements.forEach(selectedMovement => {
      if (selectedMovement.source === 'form') {
        // Get the actual movement data from current requirements (changquan/jianshu)
        const { category, index } = selectedMovement;
        
        let movementData = null;
        let actualCategory = category;
        
        // Handle special case for leg techniques which have nested categories
        if (hasSpecialHandling(selectedWeaponForm, 'hasLegSubcategories')) {
          const legCategory = currentRequirements.leg_techniques?.categories?.find(cat => cat.type === category);
          if (legCategory) {
            if (legCategory.movements[index]) {
              movementData = legCategory.movements[index];
              actualCategory = 'leg_techniques'; // Map to the judging criteria category
            }
          } else if (currentRequirements[category]?.movements[index]) {
            movementData = currentRequirements[category].movements[index];
          }
        } else {
          // For weapon forms without leg subcategories, use direct category lookup
          if (currentRequirements[category]?.movements[index]) {
            movementData = currentRequirements[category].movements[index];
          }
        }
        
        if (movementData) {
          // Map movement to judging criteria using the weapon registry
          const criteriaCategory = mapCategoryToJudgingCriteria(selectedWeaponForm, actualCategory);
          
          let foundMatch = false;
          if (criteriaCategory && judgingCriteria[criteriaCategory]) {
            // Find the specific technique in judging criteria that matches this movement
            Object.keys(judgingCriteria[criteriaCategory]).forEach(techniqueKey => {
              const technique = judgingCriteria[criteriaCategory][techniqueKey];
              
              // Match by Chinese name or English name
              if (technique.chinese === movementData.chinese || 
                  technique.english === movementData.english ||
                  technique.pinyin === movementData.pinyin) {
                
                foundMatch = true;
                if (!relevantCriteria.has(techniqueKey)) {
                  relevantCriteria.set(techniqueKey, {
                    ...technique,
                    category: criteriaCategory,
                    sources: []
                  });
                }
                relevantCriteria.get(techniqueKey).sources.push({
                  ...selectedMovement,
                  movementData
                });
              }
            });
          }
          
          // If no matching criteria found, add to movements without criteria
          if (!foundMatch) {
            movementsWithoutCriteria.push({
              ...selectedMovement,
              movementData,
              actualCategory
            });
          }
        }
      } else if (selectedMovement.source === 'nandu') {
        // Handle nandu movements from the calculator
        const nanduMovement = selectedMovement.movement;
        let foundMatch = false;
        
        // Check if this is a combo connection movement first
        if (nanduMovement.isConnectionCombo) {
          // Handle combo connection movements - they already have the criteria
          foundMatch = true;
          const techniqueKey = nanduMovement.id;
          
          if (!relevantCriteria.has(techniqueKey)) {
            relevantCriteria.set(techniqueKey, {
              ...nanduMovement,
              category: 'combo_connection',
              sources: []
            });
          }
          relevantCriteria.get(techniqueKey).sources.push({
            ...selectedMovement,
            movementData: nanduMovement,
            actualCategory: 'combo_connection'
          });
        }
        // Check if this is a combo movement
        else if (nanduMovement.category === 'Throw/Catch' && nanduMovement.isCombo) {
          // Handle combo movements
          const comboId = nanduMovement.id;
          if (judgingCriteria.combo_criteria && judgingCriteria.combo_criteria[comboId]) {
            foundMatch = true;
            const technique = judgingCriteria.combo_criteria[comboId];
            
            // Add general weapon throwing & catching deductions to combo criteria
            const generalThrowCatch = judgingCriteria.weapon_techniques?.["器械抛接"];
            const combinedTechnique = {
              ...technique,
              deductions: generalThrowCatch?.deductions || []
            };
            
            if (!relevantCriteria.has(comboId)) {
              relevantCriteria.set(comboId, {
                ...combinedTechnique,
                category: 'combo_criteria',
                sources: []
              });
            }
            relevantCriteria.get(comboId).sources.push({
              ...selectedMovement,
              movementData: nanduMovement,
              actualCategory: 'combo_criteria'
            });
          }
        }
        
        // If not a combo or combo not found, handle as regular movement
        if (!foundMatch) {
          // Map nandu movements to judging criteria categories
          let criteriaCategory = null;
          let searchMovement = nanduMovement;
          
          // Special case: Falling Front Split is categorized as "Stance" in nandu but exists under leg_techniques in judging criteria
          if (searchMovement.english === 'Falling Front Split' || searchMovement.name === 'Diē Shù Chà') {
            criteriaCategory = 'leg_techniques';
          } else if (nanduMovement.category === 'Balance') {
            criteriaCategory = 'balance_techniques';
          } else if (nanduMovement.category === 'Jumping') {
            criteriaCategory = 'jumping_techniques';
          } else if (nanduMovement.category === 'Leg' || nanduMovement.category === 'Sweeps') {
            criteriaCategory = 'leg_techniques';
          } else if (nanduMovement.category === 'Stance') {
            criteriaCategory = 'stances';
          }
        
          if (criteriaCategory && judgingCriteria[criteriaCategory]) {
            let foundTechniqueMatch = false;
            let exactMatch = null;
            const partialMatches = [];
            
            // First, check for exact matches
            Object.keys(judgingCriteria[criteriaCategory]).forEach(techniqueKey => {
              const technique = judgingCriteria[criteriaCategory][techniqueKey];
              
              const exactEnglishMatch = technique.english === searchMovement.english;
              const exactChineseMatch = technique.chinese === searchMovement.name;
              const exactPinyinMatch = technique.pinyin === searchMovement.name;
              
              if (exactEnglishMatch || exactChineseMatch || exactPinyinMatch) {
                exactMatch = { techniqueKey, technique };
              } else {
                // For partial matches, be more strict to avoid conflicts
                // Only consider it a match if the shorter string matches the longer one completely
                const techniqueEnglishLower = technique.english.toLowerCase();
                const searchEnglishLower = searchMovement.english.toLowerCase();
                
                // Only allow partial matches if one string is clearly a subset of another
                // and the difference in length suggests they're related (not accidental matches)
                const isSubset = (short, long) => long.includes(short) && Math.abs(long.length - short.length) > 3;
                
                if (isSubset(searchEnglishLower, techniqueEnglishLower) || 
                    isSubset(techniqueEnglishLower, searchEnglishLower)) {
                  partialMatches.push({ techniqueKey, technique });
                }
              }
            });
            
            // Use exact match if found, otherwise use the first partial match
            const matchToUse = exactMatch || (partialMatches.length > 0 ? partialMatches[0] : null);
            
            if (matchToUse) {
              foundTechniqueMatch = true;
              const { techniqueKey, technique } = matchToUse;
              
              if (!relevantCriteria.has(techniqueKey)) {
                relevantCriteria.set(techniqueKey, {
                  ...technique,
                  category: criteriaCategory,
                  sources: []
                });
              }
              relevantCriteria.get(techniqueKey).sources.push({
                ...selectedMovement,
                movementData: searchMovement,
                actualCategory: criteriaCategory
              });
            }
            
            // If no exact match found, add to movements without criteria
            if (!foundTechniqueMatch) {
              movementsWithoutCriteria.push({
                ...selectedMovement,
                movementData: searchMovement,
                actualCategory: criteriaCategory
              });
            }
          } else {
            // Category not in judging criteria, add to movements without criteria
            movementsWithoutCriteria.push({
              ...selectedMovement,
              movementData: searchMovement,
              actualCategory: nanduMovement.category
            });
          }
        }
      }
    });

    return { relevantCriteria, movementsWithoutCriteria };
  };

  const { relevantCriteria, movementsWithoutCriteria } = getRelevantDeductions();

  const renderDeductionCard = (technique, techniqueKey) => {
    const isExpanded = expandedSections[techniqueKey];
    
    return (
      <div key={techniqueKey} className="bg-white rounded-2xl shadow-xl shadow-red-100/50 overflow-hidden mb-4">
        <div 
          className="p-4 cursor-pointer hover:bg-red-50/50 transition-colors border-b border-gray-100"
          onClick={() => toggleSection(techniqueKey)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {technique.chinese} ({technique.pinyin}) - {technique.english}
                </h3>
                <p className="text-sm text-gray-600">
                  {technique.deductions?.length || 0} potential deductions
                  {technique.non_conformity && ` • ${technique.non_conformity.length} non-conformity standards`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
                Code: {technique.code}
              </span>
              {isExpanded ? (
                <Eye className="h-4 w-4 text-gray-600" />
              ) : (
                <Info className="h-4 w-4 text-gray-600" />
              )}
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="p-6 pt-4">
            {/* Two-column layout for deductions and non-conformity standards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deductions Column */}
              <div>
                {technique.deductions && technique.deductions.length > 0 ? (
                  <>
                    <h4 className="text-md font-medium text-gray-700 flex items-center gap-2 mb-3">
                      <Circle className="h-4 w-4 text-red-600" />
                      Potential Deductions
                    </h4>
                    <ul className="space-y-2">
                      {technique.deductions.map((deduction, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1 text-sm">•</span>
                          <div>
                            <div className="text-sm font-medium text-gray-800">
                              {deduction.chinese}
                            </div>
                            <div className="text-sm text-gray-600">
                              {deduction.english}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h4 className="text-md font-medium text-gray-700 flex items-center gap-2 mb-3">
                      <Circle className="h-4 w-4 text-gray-400" />
                      Potential Deductions
                    </h4>
                    <p className="text-sm text-gray-500 italic">No specific deductions listed</p>
                  </>
                )}
              </div>

              {/* Non-Conformity Standards Column */}
              <div>
                {technique.non_conformity && technique.non_conformity.length > 0 ? (
                  <>
                    <h4 className="text-md font-medium text-gray-700 flex items-center gap-2 mb-3">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      Non-Conformity Standards
                    </h4>
                    <ul className="space-y-2">
                      {technique.non_conformity.map((standard, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1 text-sm">•</span>
                          <div>
                            <div className="text-sm font-medium text-gray-800">
                              {standard.chinese}
                            </div>
                            <div className="text-sm text-gray-600">
                              {standard.english}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h4 className="text-md font-medium text-gray-700 flex items-center gap-2 mb-3">
                      <CheckCircle className="h-4 w-4 text-gray-400" />
                      Non-Conformity Standards
                    </h4>
                    <p className="text-sm text-gray-500 italic">No specific standards listed</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-red-100/50 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Deductions & Standards
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-4">
          ⚠️ Review potential deductions and non-conformity standards for your selected movements using{' '}
          <a 
            href="https://www.iwuf.org/xhimg/soft/240912/WUSHU-TAOLU-COMPETITION-RULES-AND-JUDGING-METHODS-2024.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-800 underline font-medium"
          >
            2024 IWUF rules
          </a>
        </p>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Selection Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-orange-800 mb-2">Nandu Calculator</h3>
            <p className="text-sm text-orange-700">
              {selectedNanduMovements.length} combos selected
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">Requirements ({weaponRegistry[selectedWeaponForm]?.name || 'Form'})</h3>
            <p className="text-sm text-blue-700">
              {Object.keys(selectedFormMovements).filter(key => selectedFormMovements[key]).length} movements selected
            </p>
          </div>
        </div>
      </div>

      {/* Deductions */}
      <div className="space-y-4">
        {relevantCriteria.size === 0 && movementsWithoutCriteria.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-8 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Movements Selected</h3>
            <p className="text-gray-500">
              Select movements in the Nandu Calculator or Requirements pages to see relevant deductions and standards.
            </p>
          </div>
        ) : (
          <>
            {/* Movements with deduction criteria */}
            {Array.from(relevantCriteria.entries()).map(([techniqueKey, technique]) => 
              renderDeductionCard(technique, techniqueKey)
            )}
            
            {/* Movements without deduction criteria */}
            {movementsWithoutCriteria.map((movement, index) => (
              <div key={`no-criteria-${index}`} className="bg-white rounded-2xl shadow-xl shadow-green-100/50 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {movement.movementData.chinese ? 
                          `${movement.movementData.chinese} (${movement.movementData.pinyin}) - ${movement.movementData.english}` :
                          `${movement.movementData.name} - ${movement.movementData.english}`
                        }
                      </h3>
                      <p className="text-sm text-gray-600">No specific deduction criteria available</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Deductions;