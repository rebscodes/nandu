import React, { useState, useEffect } from 'react';
import { AlertTriangle, Eye, CheckCircle, Circle, Info, Search } from 'lucide-react';
import { judgingCriteria } from './data/judging-criteria.js';
import { judgingCriteria as southernJudgingCriteria } from './data/southern-judging-criteria.js';
import { judgingCriteria as taijiJudgingCriteria } from './data/taiji-judging-criteria.js';
import { weaponRegistry, getWeaponRequirements, mapCategoryToJudgingCriteria, hasSpecialHandling } from './data/weapon-registry.js';
import { movements } from './data/codes.js';
import { getNonConformityCriteria } from './data/combo-mappings.js';

const Deductions = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('Northern');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Map style to judging criteria
  const getJudgingCriteriaForStyle = (style) => {
    switch(style) {
      case 'Northern':
        return judgingCriteria;
      case 'Southern':
        return southernJudgingCriteria;
      case 'Taiji':
        return taijiJudgingCriteria;
      default:
        return judgingCriteria;
    }
  };
  
  const currentJudgingCriteria = getJudgingCriteriaForStyle(activeTab);


  // Helper function to remove tone marks from Pinyin
  const removeTones = (text) => {
    if (!text) return '';
    return text
      .replace(/[āáǎàa]/g, 'a')
      .replace(/[ēéěèe]/g, 'e')  
      .replace(/[īíǐìi]/g, 'i')
      .replace(/[ōóǒòo]/g, 'o')
      .replace(/[ūúǔùu]/g, 'u')
      .replace(/[ǖǘǚǜü]/g, 'u')
      .replace(/[ńňǹ]/g, 'n')
      .replace(/[ĀÁǍÀa]/g, 'A')
      .replace(/[ĒÉĚÈe]/g, 'E')
      .replace(/[ĪÍǏÌi]/g, 'I')
      .replace(/[ŌÓǑÒo]/g, 'O')
      .replace(/[ŪÚǓÙu]/g, 'U')
      .replace(/[ǕǗǙǛü]/g, 'U')
      .replace(/[ŃŇǸ]/g, 'N');
  };

  // Search through all movements in current judging criteria
  const searchMovements = () => {
    if (!searchTerm.trim()) return [];
    
    const results = [];
    const searchLower = searchTerm.toLowerCase();
    const searchNoTones = removeTones(searchLower);
    
    // Search through all categories in the current style's judging criteria
    Object.keys(currentJudgingCriteria).forEach(categoryKey => {
      const category = currentJudgingCriteria[categoryKey];
      
      // Skip non-movement categories
      if (typeof category !== 'object' || !category) return;
      
      Object.keys(category).forEach(techniqueKey => {
        const technique = category[techniqueKey];
        
        // Skip if not a technique object
        if (typeof technique !== 'object' || !technique.chinese) return;
        
        // Search in Chinese, English, and Pinyin (both with and without tones)
        const matchesChinese = technique.chinese?.toLowerCase().includes(searchLower);
        const matchesEnglish = technique.english?.toLowerCase().includes(searchLower);
        const matchesPinyin = technique.pinyin?.toLowerCase().includes(searchLower);
        const matchesPinyinNoTones = removeTones(technique.pinyin?.toLowerCase() || '').includes(searchNoTones);
        
        if (matchesChinese || matchesEnglish || matchesPinyin || matchesPinyinNoTones) {
          results.push({
            techniqueKey,
            technique: {
              ...technique,
              category: categoryKey
            }
          });
        }
      });
    });
    
    return results;
  };
  
  const searchResults = searchMovements();
  

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Convert search results to relevantCriteria format
  const relevantCriteria = new Map();
  searchResults.forEach(result => {
    relevantCriteria.set(result.techniqueKey, result.technique);
  });

  const renderDeductionCard = (technique, techniqueKey) => {
    const isExpanded = expandedSections[techniqueKey];
    
    return (
      <div key={techniqueKey} className="bg-white rounded-2xl shadow-xl shadow-red-100/50 overflow-hidden mb-3 sm:mb-4">
        <div 
          className="p-4 sm:p-5 cursor-pointer hover:bg-red-50/50 transition-colors border-b border-gray-100"
          onClick={() => toggleSection(techniqueKey)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight mb-1">
                  {technique.chinese} ({technique.pinyin}) - {technique.english}
                </h3>
                <p className="text-sm text-gray-600">
                  {technique.deductions?.length || 0} potential deductions
                  {technique.non_conformity && ` • ${technique.non_conformity.length} non-conformity standards`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:inline text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
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
          <div className="p-4 sm:p-6 pt-4">
            {/* Mobile: stacked layout, Desktop: two-column */}
            <div className="space-y-6 sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-6 sm:space-y-0">
              {/* Deductions Column */}
              <div>
                {technique.deductions && technique.deductions.length > 0 ? (
                  <>
                    <h4 className="text-md font-medium text-gray-700 flex items-center gap-2 mb-3">
                      <Circle className="h-4 w-4 text-red-600" />
                      Potential Deductions
                    </h4>
                    
                    {/* 2024 Rule Update Notification for Code 22 */}
                    {technique.code === "22" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Info className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-800">2024 Rule Update</span>
                        </div>
                        <p className="text-xs text-blue-700">
                          This deduction code is <strong>new as of the 2024 IWUF rules</strong>. Be sure to review the updated standards.
                        </p>
                      </div>
                    )}
                    
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
    <div className="max-w-6xl mx-auto p-3 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-red-100/50 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Deductions & Standards
          </h1>
        </div>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          ⚠️ Deductions and non-conformity standards for selected movements based on{' '}
          <a 
            href="https://www.iwuf.org/xhimg/soft/240912/WUSHU-TAOLU-COMPETITION-RULES-AND-JUDGING-METHODS-2024.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-800 underline font-medium"
          >
            2024 IWUF rules
          </a>
        </p>
        
        {/* Style Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {['Northern', 'Southern', 'Taiji'].map((style) => (
            <button
              key={style}
              onClick={() => setActiveTab(style)}
              className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 ${
                activeTab === style
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movements by name (Chinese, English, or Pinyin)..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
          />
        </div>
        {searchTerm && (
          <p className="text-sm text-gray-600 mt-2">
            Found {searchResults.length} movement{searchResults.length !== 1 ? 's' : ''} in {activeTab} style
          </p>
        )}
      </div>

      {/* Deductions */}
      <div className="space-y-3 sm:space-y-4">
        {!searchTerm ? (
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-6 sm:p-8 text-center">
            <Search className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">Search for Movements</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Use the search bar above to find deductions and standards for specific movements.
            </p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-6 sm:p-8 text-center">
            <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">No Results Found</h3>
            <p className="text-sm sm:text-base text-gray-500">
              No movements found matching "{searchTerm}" in {activeTab} style. Try a different search term or switch styles.
            </p>
          </div>
        ) : (
          <>
            {/* Search results */}
            {Array.from(relevantCriteria.entries()).map(([techniqueKey, technique]) => 
              renderDeductionCard(technique, techniqueKey)
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Deductions;