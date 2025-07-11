import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, BookOpen, Clock, ChevronDown, ChevronRight, Check, RotateCcw, X, Sword } from 'lucide-react';
import { weaponRegistry, getAvailableWeapons, getWeaponRequirements } from './data/weapon-registry.js';

const FormPlanner = ({ sharedSelections = {}, setSharedSelections, selectedWeaponForm = 'changquan', setSelectedWeaponForm }) => {
  const [selectedWeapon, setSelectedWeapon] = useState(selectedWeaponForm);
  const [selectedTechniques, setSelectedTechniques] = useState(sharedSelections);

  // Get available weapons from registry
  const availableWeapons = getAvailableWeapons();
  const weaponOptions = Object.fromEntries(
    availableWeapons.map(weapon => [weapon.id, weapon])
  );

  const allWeaponOptions = weaponOptions;

  const currentRequirements = getWeaponRequirements(selectedWeapon) || getWeaponRequirements('changquan');

  // Clear selections when weapon changes
  useEffect(() => {
    setSelectedTechniques({});
    if (setSelectedWeaponForm) {
      setSelectedWeaponForm(selectedWeapon);
    }
  }, [selectedWeapon, setSelectedWeaponForm]);

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
  }, [sharedSelections]);

  const [expandedSections, setExpandedSections] = useState({});

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
    const categoryTechniques = currentRequirements[category];
    if (!categoryTechniques || !categoryTechniques.movements) return;
    
    setSelectedTechniques(prev => {
      const newState = { ...prev };
      categoryTechniques.movements.forEach((_, index) => {
        const key = `${category}-${index}`;
        delete newState[key];
      });
      return newState;
    });
  };

  const getSelectedCount = (category) => {
    const categoryTechniques = currentRequirements[category];
    if (!categoryTechniques || !categoryTechniques.movements) return 0;
    
    return categoryTechniques.movements.filter((_, index) => 
      selectedTechniques[`${category}-${index}`]
    ).length;
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
    const categoryTechniques = currentRequirements[category];
    if (!categoryTechniques || !categoryTechniques.movements) return '';
    
    const selected = categoryTechniques.movements
      .filter((_, index) => selectedTechniques[`${categoryKey}-${index}`])
      .map(technique => technique.chinese)
      .slice(0, 3);
    
    return selected.join(', ') + (selected.length < getSelectedCount(category) ? '...' : '');
  };

  const renderCategorySection = (categoryKey, categoryData, displayName) => {
    if (!categoryData || !categoryData.movements) return null;
    
    const sectionKey = categoryKey;
    
    return (
      <div key={categoryKey} className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 overflow-hidden">
        <div className="p-4 hover:bg-orange-50/50 transition-colors border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer flex-1"
              onClick={() => toggleSection(sectionKey)}
            >
              <div className="flex items-center gap-2">
                {expandedSections[sectionKey] ? (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                )}
                <h3 className="text-lg font-semibold text-gray-800">{displayName}</h3>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                getSelectedCount(categoryKey) >= categoryData.required_count
                  ? 'bg-green-100 text-green-800'
                  : 'bg-orange-100 text-orange-800'
              }`}>
                <span>{getSelectedCount(categoryKey)}/{categoryData.required_count}</span>
                {getSelectedCount(categoryKey) >= categoryData.required_count && (
                  <Check className="h-4 w-4" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {!expandedSections[sectionKey] && (
                <div className="text-sm text-gray-500 max-w-md truncate">
                  {getSelectedTechniquesPreview(categoryKey, categoryKey)}
                </div>
              )}
              {getSelectedCount(categoryKey) > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearCategorySelections(categoryKey);
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
        {expandedSections[sectionKey] && (
          <div className="p-6 pt-4">
            {categoryData.special_requirement && (
              <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded-lg">
                <strong>Special Requirement:</strong> {categoryData.special_requirement}
              </div>
            )}
            {categoryData.description && (
              <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded-lg">
                <strong>Note:</strong> {categoryData.description}
              </div>
            )}
            {renderCompactTechniques(categoryKey, categoryData.movements, categoryKey)}
          </div>
        )}
      </div>
    );
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
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Weapon Form:
          </label>
          <div className="flex flex-wrap gap-2">
            {Object.entries(allWeaponOptions).map(([key, option]) => (
              <button
                key={key}
                onClick={() => setSelectedWeapon(key)}
                disabled={!option.requirements}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  selectedWeapon === key
                    ? 'bg-orange-600 text-white shadow-lg'
                    : option.requirements
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Sword className="h-4 w-4" />
                {option.name}
                {!option.requirements && (
                  <span className="text-xs">(Coming Soon)</span>
                )}
              </button>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-lg">
          📋 Plan your {allWeaponOptions[selectedWeapon]?.name || 'weapon'} routine by selecting required techniques from each category
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {Object.entries(currentRequirements).map(([categoryKey, categoryData]) => {
          if (!categoryData || !categoryData.movements || !categoryData.required_count) return null;
          
          const displayName = categoryKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          return renderCategorySection(categoryKey, categoryData, displayName);
        })}
      </div>

      {/* Additional Requirements - only show for Changquan */}
      {selectedWeapon === 'changquan' && (
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-6 mt-4">
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
      )}
    </div>
  );
};

export default FormPlanner;