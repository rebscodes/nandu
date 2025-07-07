import React, { useState, useEffect } from 'react';
import { AlertTriangle, Eye, CheckCircle, Circle, Info } from 'lucide-react';
import { judgingCriteria } from './judging-criteria.js';
import { changquanRequirements } from './changquan-requirements.js';
import { movements } from './codes.js';

const Deductions = ({ selectedNanduMovements = [], selectedChangquanMovements = {} }) => {
  const [expandedSections, setExpandedSections] = useState({});

  // Get all selected movements from both pages
  const getAllSelectedMovements = () => {
    const movements = [];
    
    // Add selected movements from Nandu Calculator
    selectedNanduMovements.forEach(combo => {
      combo.movements.forEach(movement => {
        movements.push({
          source: 'nandu',
          movement: movement,
          combo: combo.id
        });
      });
    });

    // Add selected movements from Changquan Planner
    Object.keys(selectedChangquanMovements).forEach(key => {
      if (selectedChangquanMovements[key]) {
        // Parse the key to get category and index
        const [category, index] = key.split('-');
        movements.push({
          source: 'changquan',
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
      if (selectedMovement.source === 'changquan') {
        // Get the actual movement data from changquan requirements
        const { category, index } = selectedMovement;
        
        let movementData = null;
        let actualCategory = category;
        
        // Handle special case for leg techniques which have nested categories
        const legCategory = changquanRequirements.leg_techniques?.categories?.find(cat => cat.type === category);
        if (legCategory) {
          if (legCategory.movements[index]) {
            movementData = legCategory.movements[index];
            actualCategory = 'leg_techniques'; // Map to the judging criteria category
          }
        } else if (changquanRequirements[category]?.movements[index]) {
          movementData = changquanRequirements[category].movements[index];
        }
        
        if (movementData) {
          // Map movement to judging criteria by matching Chinese or English names
          const criteriaCategory = actualCategory; // Use the actual category name
          
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
        
        // Map nandu movements to judging criteria categories
        let criteriaCategory = null;
        let searchMovement = nanduMovement;
        
        if (nanduMovement.category === 'Balance') {
          criteriaCategory = 'balance_techniques';
        } else if (nanduMovement.category === 'Jumping') {
          criteriaCategory = 'jumping_techniques';
        } else if (nanduMovement.category === 'Leg' || nanduMovement.category === 'Sweeps') {
          criteriaCategory = 'leg_techniques';
        } else if (nanduMovement.category === 'Stance') {
          criteriaCategory = 'stances';
        }
        
        if (criteriaCategory && judgingCriteria[criteriaCategory]) {
          let foundMatch = false;
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
            foundMatch = true;
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
          if (!foundMatch) {
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
            {/* Deductions */}
            {technique.deductions && technique.deductions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-medium mb-3 text-gray-700 flex items-center gap-2">
                  <Circle className="h-4 w-4 text-red-600" />
                  Potential Deductions
                </h4>
                <div className="space-y-2">
                  {technique.deductions.map((deduction, index) => (
                    <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-red-800 mb-1">
                        {deduction.chinese}
                      </div>
                      <div className="text-sm text-red-700">
                        {deduction.english}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Non-Conformity Standards */}
            {technique.non_conformity && technique.non_conformity.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-medium mb-3 text-gray-700 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  Non-Conformity Standards
                </h4>
                <div className="space-y-2">
                  {technique.non_conformity.map((standard, index) => (
                    <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-yellow-800 mb-1">
                        {standard.chinese}
                      </div>
                      <div className="text-sm text-yellow-700">
                        {standard.english}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
          ⚠️ Review potential deductions and non-conformity standards for your selected movements
        </p>
        
        <div className="text-sm text-gray-700">
          <strong>General Deduction Rule:</strong> {judgingCriteria.general_rules.description} 
          <span className="font-medium"> ({judgingCriteria.general_rules.deduction_amount} points per error)</span>
        </div>
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
            <h3 className="text-sm font-semibold text-blue-800 mb-2">Required Movements</h3>
            <p className="text-sm text-blue-700">
              {Object.keys(selectedChangquanMovements).filter(key => selectedChangquanMovements[key]).length} movements selected
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
              Select movements in the Nandu Calculator or Required Movements pages to see relevant deductions and standards.
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
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
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
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <h4 className="text-sm font-semibold text-green-800">No Specific Deductions</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      This movement does not have specific judging criteria or deduction standards defined in the current ruleset. 
                      General execution and technique quality standards still apply.
                    </p>
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