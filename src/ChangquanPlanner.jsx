import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, BookOpen, Users, Target, Clock, ChevronDown, ChevronRight, Check, RotateCcw, X } from 'lucide-react';
import { changquanRequirements } from './data/changquan-requirements.js';

const ChangquanPlanner = ({ sharedSelections = {}, setSharedSelections }) => {
  const [selectedTechniques, setSelectedTechniques] = useState(sharedSelections);

  // Sync with shared state
  useEffect(() => {
    if (setSharedSelections) {
      setSharedSelections(selectedTechniques);
    }
  }, [selectedTechniques, setSharedSelections]);

  // Initialize from shared state when component mounts
  useEffect(() => {
    if (Object.keys(sharedSelections).length > 0) {
      setSelectedTechniques(sharedSelections);
    }
  }, []);

  const [expandedSections, setExpandedSections] = useState({
    hand_forms: false,
    fist_techniques: false,
    palm_techniques: false,
    elbow_techniques: false,
    stances: false,
    leg_techniques: false,
    balance_techniques: false
  });

  const toggleTechnique = (category, index) => {
    const key = `${category}-${index}`;
    setSelectedTechniques(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllSelections = () => {
    setSelectedTechniques({});
  };

  const clearCategorySelections = (category) => {
    if (category === 'leg_techniques') {
      // Special handling for leg techniques with subcategories
      setSelectedTechniques(prev => {
        const newState = { ...prev };
        changquanRequirements.leg_techniques.categories.forEach(subCategory => {
          subCategory.movements.forEach((_, index) => {
            const key = `${subCategory.type}-${index}`;
            delete newState[key];
          });
        });
        return newState;
      });
    } else {
      const categoryTechniques = changquanRequirements[category];
      if (!categoryTechniques || !categoryTechniques.movements) return;
      
      setSelectedTechniques(prev => {
        const newState = { ...prev };
        categoryTechniques.movements.forEach((_, index) => {
          const key = `${category}-${index}`;
          delete newState[key];
        });
        return newState;
      });
    }
  };

  const getSelectedCount = (category) => {
    const categoryTechniques = changquanRequirements[category];
    if (!categoryTechniques || !categoryTechniques.movements) return 0;
    
    return categoryTechniques.movements.filter((_, index) => 
      selectedTechniques[`${category}-${index}`]
    ).length;
  };

  const getSelectedCountForLegCategory = (categoryType) => {
    const legCategory = changquanRequirements.leg_techniques.categories.find(
      cat => cat.type === categoryType
    );
    if (!legCategory) return 0;

    return legCategory.movements.filter((_, index) => 
      selectedTechniques[`${categoryType}-${index}`]
    ).length;
  };

  const getTotalLegTechniques = () => {
    let total = 0;
    changquanRequirements.leg_techniques.categories.forEach(category => {
      total += getSelectedCountForLegCategory(category.type);
    });
    return total;
  };

  const getLegCategoriesWithSelections = () => {
    let categoriesWithSelections = 0;
    changquanRequirements.leg_techniques.categories.forEach(category => {
      if (getSelectedCountForLegCategory(category.type) > 0) {
        categoriesWithSelections++;
      }
    });
    return categoriesWithSelections;
  };

  const renderCompactTechniques = (category, techniques, categoryKey) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techniques.map((technique, index) => {
          const techniqueKey = `${categoryKey}-${index}`;
          const isSelected = selectedTechniques[techniqueKey];
          
          return (
            <div 
              key={index}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-orange-400 bg-gradient-to-r from-orange-50 to-amber-50 shadow-md'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/30'
              }`}
              onClick={() => toggleTechnique(categoryKey, index)}
            >
              <div className="flex items-start gap-2 mb-3">
                {isSelected ? (
                  <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 mb-1">
                    {technique.chinese} ({technique.pinyin}) - {technique.english}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {technique.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const getSelectedTechniquesPreview = (category, categoryKey) => {
    const categoryTechniques = changquanRequirements[category];
    if (!categoryTechniques || !categoryTechniques.movements) return '';
    
    const selected = categoryTechniques.movements
      .filter((_, index) => selectedTechniques[`${categoryKey}-${index}`])
      .map(technique => technique.chinese)
      .slice(0, 3);
    
    return selected.join(', ') + (selected.length < getSelectedCount(category) ? '...' : '');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Required Movements
            </h1>
          </div>
          {Object.keys(selectedTechniques).length > 0 && (
            <button
              onClick={clearAllSelections}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Clear All
            </button>
          )}
        </div>
        <p className="text-gray-600 text-lg">
          📋 Plan your Changquan routine by selecting required techniques from each category
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Hand Forms */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('hand_forms')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.hand_forms ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Hand Forms</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('hand_forms') >= changquanRequirements.hand_forms.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('hand_forms')}/{changquanRequirements.hand_forms.required_count}</span>
                  {getSelectedCount('hand_forms') >= changquanRequirements.hand_forms.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.hand_forms && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('hand_forms', 'hand_forms')}
                  </div>
                )}
                {getSelectedCount('hand_forms') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('hand_forms');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.hand_forms && (
            <div className="p-6 pt-4">
              {renderCompactTechniques('hand_forms', changquanRequirements.hand_forms.movements, 'hand_forms')}
            </div>
          )}
        </div>

        {/* Fist Techniques */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('fist_techniques')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.fist_techniques ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Fist Techniques</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('fist_techniques') >= changquanRequirements.fist_techniques.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('fist_techniques')}/{changquanRequirements.fist_techniques.required_count}</span>
                  {getSelectedCount('fist_techniques') >= changquanRequirements.fist_techniques.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.fist_techniques && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('fist_techniques', 'fist_techniques')}
                  </div>
                )}
                {getSelectedCount('fist_techniques') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('fist_techniques');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.fist_techniques && (
            <div className="p-6 pt-4">
              {renderCompactTechniques('fist_techniques', changquanRequirements.fist_techniques.movements, 'fist_techniques')}
            </div>
          )}
        </div>

        {/* Palm Techniques */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('palm_techniques')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.palm_techniques ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Palm Techniques</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('palm_techniques') >= changquanRequirements.palm_techniques.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('palm_techniques')}/{changquanRequirements.palm_techniques.required_count}</span>
                  {getSelectedCount('palm_techniques') >= changquanRequirements.palm_techniques.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.palm_techniques && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('palm_techniques', 'palm_techniques')}
                  </div>
                )}
                {getSelectedCount('palm_techniques') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('palm_techniques');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.palm_techniques && (
            <div className="p-6 pt-4">
              {renderCompactTechniques('palm_techniques', changquanRequirements.palm_techniques.movements, 'palm_techniques')}
            </div>
          )}
        </div>

        {/* Elbow Techniques */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('elbow_techniques')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.elbow_techniques ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Elbow Techniques</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('elbow_techniques') >= changquanRequirements.elbow_techniques.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('elbow_techniques')}/{changquanRequirements.elbow_techniques.required_count}</span>
                  {getSelectedCount('elbow_techniques') >= changquanRequirements.elbow_techniques.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.elbow_techniques && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('elbow_techniques', 'elbow_techniques')}
                  </div>
                )}
                {getSelectedCount('elbow_techniques') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('elbow_techniques');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.elbow_techniques && (
            <div className="p-6 pt-4">
              {renderCompactTechniques('elbow_techniques', changquanRequirements.elbow_techniques.movements, 'elbow_techniques')}
            </div>
          )}
        </div>

        {/* Stances */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('stances')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.stances ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Stances</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('stances') >= changquanRequirements.stances.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('stances')}/{changquanRequirements.stances.required_count}</span>
                  {getSelectedCount('stances') >= changquanRequirements.stances.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.stances && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('stances', 'stances')}
                  </div>
                )}
                {getSelectedCount('stances') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('stances');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.stances && (
            <div className="p-6 pt-4">
              {renderCompactTechniques('stances', changquanRequirements.stances.movements, 'stances')}
            </div>
          )}
        </div>

        {/* Leg Techniques */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('leg_techniques')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.leg_techniques ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Leg Techniques</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getLegCategoriesWithSelections() >= changquanRequirements.leg_techniques.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getLegCategoriesWithSelections()}/{changquanRequirements.leg_techniques.required_count}</span>
                  {getLegCategoriesWithSelections() >= changquanRequirements.leg_techniques.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {getTotalLegTechniques() > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('leg_techniques');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.leg_techniques && (
            <div className="p-6 pt-4">
              {changquanRequirements.leg_techniques.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6 last:mb-0">
                  <h4 className="text-md font-medium mb-3 text-gray-700 flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-600" />
                    {category.chinese} - {category.description}
                    <span className="text-sm text-gray-500">
                      ({getSelectedCountForLegCategory(category.type)} selected)
                    </span>
                  </h4>
                  {renderCompactTechniques(`leg_${category.type}`, category.movements, category.type)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Balance Techniques */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
          <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => toggleSection('balance_techniques')}
              >
                <div className="flex items-center gap-2">
                  {expandedSections.balance_techniques ? (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">Balance Techniques</h3>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  getSelectedCount('balance_techniques') >= changquanRequirements.balance_techniques.required_count
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <span>{getSelectedCount('balance_techniques')}/{changquanRequirements.balance_techniques.required_count}</span>
                  {getSelectedCount('balance_techniques') >= changquanRequirements.balance_techniques.required_count && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!expandedSections.balance_techniques && (
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {getSelectedTechniquesPreview('balance_techniques', 'balance_techniques')}
                  </div>
                )}
                {getSelectedCount('balance_techniques') > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCategorySelections('balance_techniques');
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          {expandedSections.balance_techniques && (
            <div className="p-6 pt-4">
              <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded-lg">
                <strong>Note:</strong> {changquanRequirements.balance_techniques.description}
              </div>
              {renderCompactTechniques('balance_techniques', changquanRequirements.balance_techniques.movements, 'balance_techniques')}
            </div>
          )}
        </div>

        {/* Additional Requirements */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            Additional Competition Requirements
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span><strong>Duration:</strong> 1 minute 20 seconds (±5 seconds)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span><strong>Required Stances:</strong> Must include Mǎ Bù, Gōng Bù, Pū Bù, Xū Bù, Xiē Bù</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span><strong>Rhythm Changes:</strong> Must demonstrate speed and rhythm variations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span><strong>Eye Focus:</strong> Must demonstrate Shén (spirit) through eye movements and focus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span><strong>Overall Balance:</strong> Routine must demonstrate balance of hand, leg, balance, jumping, and flexibility techniques</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangquanPlanner;