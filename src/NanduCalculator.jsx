import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Plus, X, RotateCcw, Calculator, ChevronDown, ChevronUp, GripVertical, Star, ArrowUp, ArrowDown } from 'lucide-react';
import { movements, connections } from './data/codes.js';
import { southernMovements, southernConnections } from './data/southern-nandu-codes.js';
import BottomSheet from './BottomSheet.jsx';
import { getComboScore, getTotalScore } from './utils/scoring.js';

const WushuNanduCalculator = ({ sharedCombos = [], setSharedCombos }) => {
  const [combos, setCombos] = useState(sharedCombos);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('northern');

  // Clear combos and reset category when style changes
  useEffect(() => {
    setCombos([]);
    setSelectedCategory('Jumping');
    setMobileSelectedCategory('Jumping');
  }, [selectedStyle]);

  // Sync with shared state
  useEffect(() => {
    if (setSharedCombos) {
      setSharedCombos(combos);
    }
  }, [combos, setSharedCombos]);

  // Initialize from shared state when component mounts
  useEffect(() => {
    if (sharedCombos.length > 0) {
      setCombos(sharedCombos);
    }
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('Jumping');
  const [draggedMovement, setDraggedMovement] = useState(null);
  const [dragOverCombo, setDragOverCombo] = useState(null);
  const [hasCreatedThrowCatchCombos, setHasCreatedThrowCatchCombos] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [targetComboId, setTargetComboId] = useState(null);
  const [mobileSearchTerm, setMobileSearchTerm] = useState('');
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState('Jumping');

  // Get current movements and connections based on selected style
  const getCurrentMovements = () => {
    switch (selectedStyle) {
      case 'southern':
        return southernMovements;
      case 'taiji':
        return []; // Will be implemented later
      case 'northern':
      default:
        return movements;
    }
  };

  const getCurrentConnections = () => {
    switch (selectedStyle) {
      case 'southern':
        return southernConnections;
      case 'taiji':
        return []; // Will be implemented later
      case 'northern':
      default:
        return connections;
    }
  };

  const currentMovements = getCurrentMovements();
  const currentConnections = getCurrentConnections();

  const getCurrentCategories = () => {
    switch (selectedStyle) {
      case 'southern':
        return ['Jumping', 'Stance', 'Leg', 'Tumbling'];
      case 'taiji':
        return ['Balance', 'Jumping', 'Stance', 'Leg']; // Will be updated when taiji codes are added
      case 'northern':
      default:
        return ['Jumping', 'Stance', 'Balance', 'Sweeps', 'Throw/Catch'];
    }
  };

  const categories = getCurrentCategories();

  // Remove tones from pinyin for tone-agnostic search
  const removeTones = (text) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g, (match) => {
        const toneMap = {
          'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
          'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
          'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
          'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
          'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
          'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü'
        };
        return toneMap[match] || match;
      });
  };

  const filteredMovements = currentMovements.filter(movement => {
    const searchLower = searchTerm.toLowerCase();
    const searchWithoutTones = removeTones(searchLower);
    const nameWithoutTones = removeTones(movement.name).toLowerCase();
    
    const matchesSearch = movement.name.toLowerCase().includes(searchLower) ||
                         movement.english.toLowerCase().includes(searchLower) ||
                         movement.id.toLowerCase().includes(searchLower) ||
                         // Tone-agnostic pinyin search
                         nameWithoutTones.includes(searchWithoutTones);
    const matchesCategory = movement.category === selectedCategory || 
      (selectedCategory === 'Sweeps' && movement.category === 'Leg') ||
      (selectedCategory === 'Leg' && movement.category === 'Leg');
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    // Sort by points (ascending), then by grade (A, B, C, D), then by code (ascending)
    if (a.points !== b.points) return a.points - b.points;
    if (a.grade !== b.grade) return a.grade.localeCompare(b.grade);
    return a.id.localeCompare(b.id);
  });

  // Handle combo movements (special drag behavior for throw/catch combos)
  const handleComboMovementDrag = (comboMovement) => {
    if (comboMovement.id === 'COMBO_PAO_QIANG_JIE') {
      const throwMovement = currentMovements.find(m => m.id === 'THROW');
      const forwardDiveRoll = currentMovements.find(m => m.id === '445A');
      const catchMovement = currentMovements.find(m => m.id === 'CATCH');
      
      const newCombo = {
        id: Date.now(),
        movements: [throwMovement, forwardDiveRoll, catchMovement], // Only individual movements
        connections: [], // No connections - score is fixed at 0.1 total
        expanded: true,
        isThrowCatchCombo: true,
        fixedScore: 0.1,
        comboMovement: comboMovement // Store combo movement separately for deductions detection
      };
      return newCombo;
    } else if (comboMovement.id === 'COMBO_PAO_TENG_JIE') {
      const throwMovement = currentMovements.find(m => m.id === 'THROW');
      const tengKongFeiJiao = currentMovements.find(m => m.id === '312A');
      const catchMovement = currentMovements.find(m => m.id === 'CATCH');
      
      const newCombo = {
        id: Date.now(),
        movements: [throwMovement, tengKongFeiJiao, catchMovement], // Only individual movements
        connections: [], // No connections - score is fixed at 0.1 connection bonus
        expanded: true,
        isThrowCatchCombo: true,
        fixedScore: 0.1,
        comboMovement: comboMovement // Store combo movement separately for deductions detection
      };
      return newCombo;
    } else if (comboMovement.id === 'COMBO_PAO_XUAN_JIE') {
      const throwMovement = currentMovements.find(m => m.id === 'THROW');
      const xuanFengJiao = currentMovements.find(m => m.id === '323A');
      const catchMovement = currentMovements.find(m => m.id === 'CATCH');
      
      const newCombo = {
        id: Date.now(),
        movements: [throwMovement, xuanFengJiao, catchMovement], // Only individual movements
        connections: [], // No connections - score is fixed at 0.15 connection bonus
        expanded: true,
        isThrowCatchCombo: true,
        fixedScore: 0.15,
        comboMovement: comboMovement // Store combo movement separately for deductions detection
      };
      return newCombo;
    } else if (comboMovement.id === 'COMBO_PAO_LIAN_JIE') {
      const throwMovement = currentMovements.find(m => m.id === 'THROW');
      const tengKongBaiLian = currentMovements.find(m => m.id === '324A');
      const catchMovement = currentMovements.find(m => m.id === 'CATCH');
      
      const newCombo = {
        id: Date.now(),
        movements: [throwMovement, tengKongBaiLian, catchMovement], // Only individual movements
        connections: [], // No connections - score is fixed at 0.15 connection bonus
        expanded: true,
        isThrowCatchCombo: true,
        fixedScore: 0.15,
        comboMovement: comboMovement // Store combo movement separately for deductions detection
      };
      return newCombo;
    }
    return null;
  };

  const createNewCombo = () => {
    const newCombo = {
      id: Date.now(),
      movements: [],
      connections: [],
      expanded: true
    };
    setCombos([...combos, newCombo]);
  };

  const addMovementToCombo = (comboId, movement) => {
    setCombos(combos.map(combo => {
      if (combo.id === comboId) {
        const newMovements = [...combo.movements, movement];
        const newConnections = [...combo.connections];
        
        // Check if there's a connection between the last two movements
        if (newMovements.length >= 2) {
          const lastMove = newMovements[newMovements.length - 2];
          const currentMove = newMovements[newMovements.length - 1];
          const connection = currentConnections.find(conn => 
            conn.from === lastMove.id && conn.to === currentMove.id
          );
          if (connection) {
            newConnections.push(connection);
          }
        }
        
        return {
          ...combo,
          movements: newMovements,
          connections: newConnections
        };
      }
      return combo;
    }));
  };

  const removeMovementFromCombo = (comboId, movementIndex) => {
    setCombos(combos.map(combo => {
      if (combo.id === comboId) {
        const newMovements = combo.movements.filter((_, index) => index !== movementIndex);
        const newConnections = [];
        
        // Recalculate connections for the remaining movements
        for (let i = 0; i < newMovements.length - 1; i++) {
          const connection = currentConnections.find(conn => 
            conn.from === newMovements[i].id && conn.to === newMovements[i + 1].id
          );
          if (connection) {
            newConnections.push(connection);
          }
        }
        
        return {
          ...combo,
          movements: newMovements,
          connections: newConnections
        };
      }
      return combo;
    }));
  };

  const moveMovementUp = (comboId, movementIndex) => {
    if (movementIndex === 0) return; // Can't move first item up
    
    setCombos(combos.map(combo => {
      if (combo.id === comboId) {
        const newMovements = [...combo.movements];
        // Swap with previous movement
        [newMovements[movementIndex - 1], newMovements[movementIndex]] = 
        [newMovements[movementIndex], newMovements[movementIndex - 1]];
        
        // Recalculate connections for the new order
        const newConnections = [];
        for (let i = 0; i < newMovements.length - 1; i++) {
          const connection = currentConnections.find(conn => 
            conn.from === newMovements[i].id && conn.to === newMovements[i + 1].id
          );
          if (connection) {
            newConnections.push(connection);
          }
        }
        
        return {
          ...combo,
          movements: newMovements,
          connections: newConnections
        };
      }
      return combo;
    }));
  };

  const moveMovementDown = (comboId, movementIndex, totalMovements) => {
    if (movementIndex === totalMovements - 1) return; // Can't move last item down
    
    setCombos(combos.map(combo => {
      if (combo.id === comboId) {
        const newMovements = [...combo.movements];
        // Swap with next movement
        [newMovements[movementIndex], newMovements[movementIndex + 1]] = 
        [newMovements[movementIndex + 1], newMovements[movementIndex]];
        
        // Recalculate connections for the new order
        const newConnections = [];
        for (let i = 0; i < newMovements.length - 1; i++) {
          const connection = currentConnections.find(conn => 
            conn.from === newMovements[i].id && conn.to === newMovements[i + 1].id
          );
          if (connection) {
            newConnections.push(connection);
          }
        }
        
        return {
          ...combo,
          movements: newMovements,
          connections: newConnections
        };
      }
      return combo;
    }));
  };

  const removeCombo = (comboId) => {
    setCombos(combos.filter(combo => combo.id !== comboId));
  };

  const toggleComboExpanded = (comboId) => {
    setCombos(combos.map(combo => 
      combo.id === comboId ? { ...combo, expanded: !combo.expanded } : combo
    ));
  };

  const clearAll = () => {
    setCombos([]);
  };

  // Bottom sheet handlers
  const openBottomSheet = (comboId = null) => {
    setTargetComboId(comboId);
    setShowBottomSheet(true);
  };

  const closeBottomSheet = () => {
    setShowBottomSheet(false);
    setTargetComboId(null);
    // Clear mobile search when closing
    setMobileSearchTerm('');
  };

  const handleMovementSelect = (movement) => {
    if (movement.isCombo) {
      // Handle combo movements
      const newCombo = handleComboMovementDrag(movement);
      if (newCombo) {
        if (targetComboId) {
          // Replace existing combo
          setCombos(combos.map(combo => combo.id === targetComboId ? newCombo : combo));
        } else {
          // Create new combo
          setCombos([...combos, newCombo]);
        }
      }
    } else {
      if (targetComboId) {
        // Add to existing combo
        addMovementToCombo(targetComboId, movement);
      } else {
        // Create new combo with movement
        const newCombo = {
          id: Date.now(),
          movements: [movement],
          connections: [],
          expanded: true
        };
        setCombos([...combos, newCombo]);
      }
    }
    closeBottomSheet();
  };

  // Drag and drop handlers
  const handleDragStart = (e, movement) => {
    setDraggedMovement(movement);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragEnd = () => {
    setDraggedMovement(null);
    setDragOverCombo(null);
  };

  const handleDragOver = (e, comboId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCombo(comboId);
  };

  const handleDragLeave = (e) => {
    // Only clear drag over if we're actually leaving the combo area
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOverCombo(null);
    }
  };

  const handleDrop = (e, comboId) => {
    e.preventDefault();
    if (draggedMovement) {
      if (draggedMovement.isCombo) {
        // Handle combo movements - replace the target combo
        const newCombo = handleComboMovementDrag(draggedMovement);
        if (newCombo) {
          setCombos(combos.map(combo => combo.id === comboId ? newCombo : combo));
        }
      } else {
        addMovementToCombo(comboId, draggedMovement);
      }
    }
    setDraggedMovement(null);
    setDragOverCombo(null);
  };


  // Check for duplicate movements across all combos
  const getDuplicateMovementWarnings = () => {
    const warnings = [];
    const movementUsage = new Map(); // movement.id -> array of {comboIndex, connections}
    
    // Track all movements and their connections
    combos.forEach((combo, comboIndex) => {
      combo.movements.forEach((movement, movIndex) => {
        // Only check scoring movements (not stances or combo metadata)
        if (movement.points > 0 && !movement.isCombo) {
          const key = movement.id;
          if (!movementUsage.has(key)) {
            movementUsage.set(key, []);
          }
          
          // Get the connection after this movement (if any)
          const connection = combo.connections[movIndex];
          
          movementUsage.get(key).push({
            comboIndex,
            connection: connection ? connection.to : null
          });
        }
      });
    });
    
    // Check for duplicates with same connections
    movementUsage.forEach((usages, movementId) => {
      if (usages.length > 1) {
        // Group by connection to find identical movement+connection pairs
        const connectionGroups = new Map();
        usages.forEach(usage => {
          const connectionKey = usage.connection || 'no-connection';
          if (!connectionGroups.has(connectionKey)) {
            connectionGroups.set(connectionKey, []);
          }
          connectionGroups.get(connectionKey).push(usage);
        });
        
        // Check if any connection appears more than once (excluding no-connection cases)
        connectionGroups.forEach((group, connectionKey) => {
          if (group.length > 1 && connectionKey !== 'no-connection') {
            const movement = currentMovements.find(m => m.id === movementId);
            const comboNumbers = group.map(u => u.comboIndex + 1);
            const connectionName = currentMovements.find(m => m.id === connectionKey)?.name || connectionKey;
            
            warnings.push({
              movement,
              combos: comboNumbers,
              connection: connectionName,
              message: `"${movement.name}" (${movement.id}) with connection to "${connectionName}" appears in multiple combos`
            });
          }
        });
      }
    });
    
    return warnings;
  };

  // Calculate total scores using extracted utility functions
  const { movementScore: totalMovementScore, connectionScore: totalConnectionScore, totalScore } = getTotalScore(combos);

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'C': return 'bg-purple-100 text-purple-800';
      case 'D': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Memoized filtered movements for mobile to prevent re-renders
  const mobileFilteredMovements = useMemo(() => {
    return currentMovements.filter(movement => {
      const searchLower = mobileSearchTerm.toLowerCase();
      const searchWithoutTones = removeTones(searchLower);
      const nameWithoutTones = removeTones(movement.name).toLowerCase();
      
      const matchesSearch = movement.name.toLowerCase().includes(searchLower) ||
                           movement.english.toLowerCase().includes(searchLower) ||
                           movement.id.toLowerCase().includes(searchLower) ||
                           // Tone-agnostic pinyin search
                           nameWithoutTones.includes(searchWithoutTones);
      
      // If there's a search term, search across all categories
      if (mobileSearchTerm.trim()) {
        return matchesSearch;
      }
      
      // If no search term, filter by selected category
      const matchesCategory = movement.category === mobileSelectedCategory || 
        (mobileSelectedCategory === 'Sweeps' && movement.category === 'Leg') ||
        (mobileSelectedCategory === 'Leg' && movement.category === 'Leg');
      return matchesCategory;
    }).sort((a, b) => {
      // Sort by points (ascending), then by grade (A, B, C, D), then by code (ascending)
      if (a.points !== b.points) return a.points - b.points;
      if (a.grade !== b.grade) return a.grade.localeCompare(b.grade);
      return a.id.localeCompare(b.id);
    });
  }, [mobileSearchTerm, mobileSelectedCategory, currentMovements]);

  // Movement picker component for bottom sheet
  const MovementPicker = () => {
    const searchInputRef = useRef(null);

    // Set the initial value when component mounts
    React.useEffect(() => {
      if (searchInputRef.current) {
        searchInputRef.current.value = mobileSearchTerm;
      }
    }, []);

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchValue = searchInputRef.current?.value || '';
        setMobileSearchTerm(searchValue);
        // Keep the text in the input after searching
        if (searchInputRef.current) {
          searchInputRef.current.value = searchValue;
        }
      }
    };

    return (
      <div className="p-6">
        {/* Mobile Style Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setSelectedStyle('northern')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                selectedStyle === 'northern'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              Northern
            </button>
            <button
              onClick={() => setSelectedStyle('southern')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                selectedStyle === 'southern'
                  ? 'border-red-500 text-red-600 bg-red-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              Southern
            </button>
            <button
              onClick={() => setSelectedStyle('taiji')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                selectedStyle === 'taiji'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              Taiji
            </button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-4">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Type and press Enter to search..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-orange-50/30"
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setMobileSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  mobileSelectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Movement List */}
        <div className="space-y-3">
          {mobileFilteredMovements.map(movement => (
          <button
            key={movement.id}
            onClick={() => handleMovementSelect(movement)}
            className="w-full border border-gray-200 rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:border-orange-200 text-left"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                  {movement.grade !== '-' && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(movement.grade)}`}>
                      {movement.grade}
                    </span>
                  )}
                  {movement.category !== 'Stance' && (
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{movement.id}</span>
                  )}
                  {movement.points > 0 && (
                    <span className="text-xs sm:text-sm font-bold text-gray-800">{movement.points}pts</span>
                  )}
                </div>
                <div className="text-sm font-medium text-gray-800 mb-1 leading-tight">{movement.name}</div>
                <div className="text-xs text-gray-600 leading-tight">{movement.english}</div>
              </div>
              <div className="flex items-center text-orange-400 ml-2">
                <Plus className="h-4 w-4" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
  };

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Nandu Calculator</h1>
        </div>
        
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          ✨ Build combos using{' '}
          <a 
            href="https://www.iwuf.org/xhimg/soft/240912/WUSHU-TAOLU-COMPETITION-RULES-AND-JUDGING-METHODS-2024.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-800 underline font-medium"
          >
            2024 IWUF Competition Rules
          </a>
          ✨
        </p>
      </div>


      {/* Mobile-first layout: single column by default, two columns on lg+ screens */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Movement Selection Panel - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-6">
          {/* Style Tabs */}
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setSelectedStyle('northern')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'northern'
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Northern
              </button>
              <button
                onClick={() => setSelectedStyle('southern')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'southern'
                    ? 'border-red-500 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Southern
              </button>
              <button
                onClick={() => setSelectedStyle('taiji')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'taiji'
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Taiji
              </button>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4 text-gray-800">📚 {selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)} Movements Library</h2>
          
          {/* Search and Filter */}
          <div className="mb-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search movements..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-orange-50/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Movement List */}
          <div className="max-h-[32rem] overflow-y-auto">
            {filteredMovements.map((movement, index) => (
              <div 
                key={movement.id} 
                draggable={true}
                onDragStart={(e) => handleDragStart(e, movement)}
                onDragEnd={handleDragEnd}
                className={`border border-gray-200 rounded-xl p-4 transition-all duration-200 hover:shadow-md cursor-grab hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:border-orange-200 active:cursor-grabbing ${
                  draggedMovement?.id === movement.id ? 'opacity-50 scale-95' : ''
                } ${index < filteredMovements.length - 1 ? 'mb-3' : ''}`}
                title="Drag to add to combo"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                      {movement.grade !== '-' && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(movement.grade)}`}>
                          {movement.grade}
                        </span>
                      )}
                      {movement.category !== 'Stance' && (
                        <span className="text-xs sm:text-sm font-medium text-gray-600">{movement.id}</span>
                      )}
                      {movement.points > 0 && (
                        <span className="text-xs sm:text-sm font-bold text-gray-800">{movement.points}pts</span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-800 mb-1 leading-tight">{movement.name}</div>
                    <div className="text-xs text-gray-600 leading-tight">{movement.english}</div>
                  </div>
                  <div className="flex items-center text-orange-400 ml-2">
                    <GripVertical className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Routine Builder Panel */}
        <div className="bg-white rounded-2xl shadow-xl shadow-orange-100/50 p-4 sm:p-6">
          {/* Mobile Style Selector */}
          <div className="lg:hidden mb-4">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setSelectedStyle('northern')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'northern'
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Northern
              </button>
              <button
                onClick={() => setSelectedStyle('southern')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'southern'
                    ? 'border-red-500 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Southern
              </button>
              <button
                onClick={() => setSelectedStyle('taiji')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                  selectedStyle === 'taiji'
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                Taiji
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">🤸 Your {selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1)} Routine</h2>
            <div className="flex gap-2">
              {/* New Combo button for all screen sizes */}
              <button
                onClick={createNewCombo}
                className="flex items-center gap-2 px-4 py-3 bg-orange-100 text-orange-700 border border-orange-200 rounded-xl hover:bg-orange-200 hover:border-orange-300 transition-all duration-200 text-sm font-medium"
              >
                <Plus className="h-4 w-4" />
                ✨ New Combo
              </button>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50"
              >
                <RotateCcw className="h-4 w-4" />
                Clear All
              </button>
            </div>
          </div>

          {/* Score Summary - More compact on mobile */}
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-3 sm:p-6 mb-3 sm:mb-6 border border-orange-100">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Movements</div>
                <div className={`text-sm sm:text-lg font-bold ${
                  totalMovementScore > 1.4 
                    ? 'text-orange-500' : 'text-gray-800'
                }`}>
                  {totalMovementScore.toFixed(2)}/1.40
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Connections</div>
                <div className={`text-sm sm:text-lg font-bold ${
                  totalConnectionScore > 0.6 
                    ? 'text-orange-500' : 'text-gray-800'
                }`}>
                  {totalConnectionScore.toFixed(2)}/0.60
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Total</div>
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{totalScore.toFixed(2)}/2.00</div>
              </div>
            </div>
          </div>

          {/* Warnings - More compact on mobile */}
          {(() => {
            const warnings = getDuplicateMovementWarnings();
            return warnings.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  <h3 className="text-xs sm:text-sm font-semibold text-red-800">Rule Violations</h3>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  {warnings.map((warning, index) => (
                    <div key={index} className="text-xs sm:text-sm text-red-700">
                      <span className="font-medium">⚠️ {warning.message}</span>
                      <span className="text-red-600 ml-1">(Combos: {warning.combos.join(', ')})</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-red-600 mt-1 sm:mt-2">
                  Each movement can only be used once unless it has different connections each time.
                </div>
              </div>
            );
          })()}

          {/* Combos - Taller on mobile for better visibility */}
          <div className="max-h-[75vh] sm:max-h-[32rem] overflow-y-auto">
            {combos.length === 0 ? (
              <div 
                className={`text-center text-gray-500 py-8 border-2 border-dashed rounded-2xl transition-all duration-200 cursor-pointer ${
                  dragOverCombo === 'empty' 
                    ? 'border-orange-400 bg-orange-50 text-orange-600' 
                    : 'border-gray-300 hover:border-orange-300 hover:bg-orange-50/50'
                }`}
                onClick={() => {
                  if (!draggedMovement) {
                    // Mobile: open bottom sheet, Desktop: create new combo
                    if (window.innerWidth < 1024) {
                      openBottomSheet();
                    } else {
                      createNewCombo();
                    }
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (draggedMovement) {
                    setDragOverCombo('empty');
                  }
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setDragOverCombo(null);
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (draggedMovement) {
                    if (draggedMovement.isCombo) {
                      // Handle combo movements
                      const newCombo = handleComboMovementDrag(draggedMovement);
                      if (newCombo) {
                        setCombos([newCombo]);
                      }
                    } else {
                      // Create new combo and add movement
                      const newCombo = {
                        id: Date.now(),
                        movements: [draggedMovement],
                        connections: [],
                        expanded: true
                      };
                      setCombos([newCombo]);
                    }
                  }
                  setDraggedMovement(null);
                }}
              >
                <Calculator className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p className="hidden lg:block">
                  {draggedMovement 
                    ? '📦 Drop here to create a new combo!' 
                    : 'Drag a movement here to create your first combo!'
                  }
                </p>
                <p className="lg:hidden">
                  Tap to add your first movement and create a combo!
                </p>
              </div>
            ) : (
              combos.map((combo, comboIndex) => (
                <div 
                  key={combo.id} 
                  className={`border rounded-2xl p-4 mb-4 shadow-sm transition-all duration-200 ${
                    dragOverCombo === combo.id 
                      ? 'border-orange-400 bg-gradient-to-r from-orange-100 to-amber-100 shadow-lg scale-102' 
                      : 'border-orange-100 bg-gradient-to-r from-white to-orange-50/30'
                  }`}
                  onDragOver={(e) => handleDragOver(e, combo.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, combo.id)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500">Combo #{comboIndex + 1}</span>
                      <span className="text-sm font-bold text-gray-800">{getComboScore(combo).toFixed(2)}pts</span>
                      <span className="text-xs text-gray-500">
                        ({combo.movements.length} move{combo.movements.length !== 1 ? 's' : ''}, {combo.connections.length} connection{combo.connections.length !== 1 ? 's' : ''})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleComboExpanded(combo.id)}
                        className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        {combo.expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => removeCombo(combo.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {combo.expanded && (
                    <div>
                      {/* Movements in Combo */}
                      {combo.movements.length === 0 ? (
                        <p className="text-sm text-gray-500 italic mb-3">No movements yet - add your first movement below</p>
                      ) : (
                        <div className="space-y-2 mb-3">
                          {combo.movements.map((movement, movIndex) => (
                            <div key={movIndex}>
                              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-orange-100">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-gray-500">#{movIndex + 1}</span>
                                    {movement.grade !== '-' && (
                                      <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(movement.grade)}`}>
                                        {movement.grade}
                                      </span>
                                    )}
                                    <span className="text-xs font-medium text-gray-600">{movement.id}</span>
                                    <span className="text-xs font-bold text-gray-800">{movement.points}pts</span>
                                  </div>
                                  <div className="text-sm text-gray-800">{movement.name}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                  {/* Move Up Button */}
                                  <button
                                    onClick={() => moveMovementUp(combo.id, movIndex)}
                                    disabled={movIndex === 0}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      movIndex === 0 
                                        ? 'text-gray-300 cursor-not-allowed' 
                                        : 'text-blue-500 hover:bg-blue-50'
                                    }`}
                                    title="Move up"
                                  >
                                    <ArrowUp className="h-3 w-3" />
                                  </button>
                                  {/* Move Down Button */}
                                  <button
                                    onClick={() => moveMovementDown(combo.id, movIndex, combo.movements.length)}
                                    disabled={movIndex === combo.movements.length - 1}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      movIndex === combo.movements.length - 1 
                                        ? 'text-gray-300 cursor-not-allowed' 
                                        : 'text-blue-500 hover:bg-blue-50'
                                    }`}
                                    title="Move down"
                                  >
                                    <ArrowDown className="h-3 w-3" />
                                  </button>
                                  {/* Delete Button */}
                                  <button
                                    onClick={() => removeMovementFromCombo(combo.id, movIndex)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Remove movement"
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </div>
                              </div>
                              
                              {/* Show connection after this movement */}
                              {combo.connections[movIndex] && (
                                <div className="ml-4 mt-2 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-400 shadow-sm">
                                  <div className="text-xs text-green-800 font-medium">
                                    Connection: +{combo.connections[movIndex].points}pts ({combo.connections[movIndex].grade} Grade)
                                  </div>
                                  <div className="text-xs text-green-600">
                                    {combo.connections[movIndex].description}
                                  </div>
                                </div>
                              )}
                              
                              {/* Show throw/catch combo bonus after the last movement */}
                              {combo.isThrowCatchCombo && movIndex === combo.movements.length - 1 && (
                                <div className="ml-4 mt-2 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-400 shadow-sm">
                                  <div className="text-xs text-green-800 font-medium">
                                    Throw/Catch Combo Bonus: +{combo.fixedScore}pts
                                  </div>
                                  <div className="text-xs text-green-600">
                                    Complete sequence bonus for toss-movement-catch combination
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Add Movement Controls - Now at the bottom */}
                      <div className="flex gap-2">
                        {/* Mobile: Bottom sheet button */}
                        <button
                          onClick={() => openBottomSheet(combo.id)}
                          className="flex items-center gap-2 px-4 py-3 bg-orange-100 text-orange-700 border border-orange-200 rounded-xl hover:bg-orange-200 hover:border-orange-300 transition-all duration-200 text-sm font-medium lg:hidden flex-1"
                        >
                          <Plus className="h-4 w-4" />
                          Add Movement
                        </button>
                        
                        {/* Desktop: Dropdown */}
                        <select
                          onChange={(e) => {
                            const movement = currentMovements.find(m => m.id === e.target.value);
                            if (movement) {
                              addMovementToCombo(combo.id, movement);
                              e.target.value = '';
                            }
                          }}
                          className="hidden lg:block w-full p-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-orange-50/30"
                        >
                          <option value="">Add movement to combo...</option>
                          {currentMovements.map(movement => (
                            <option key={movement.id} value={movement.id}>
                              {movement.name} ({movement.id}) - {movement.points}pts
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            
            {/* Drop zone for creating new combo at the bottom */}
            {combos.length > 0 && (
              <div 
                className={`text-center py-6 border-2 border-dashed rounded-2xl transition-all duration-200 mt-4 cursor-pointer ${
                  dragOverCombo === 'new' 
                    ? 'border-orange-400 bg-orange-50 text-orange-600' 
                    : 'border-gray-300 text-gray-400 hover:border-orange-300 hover:bg-orange-50/50'
                }`}
                onClick={() => {
                  if (!draggedMovement) {
                    // Mobile: open bottom sheet, Desktop: create new combo
                    if (window.innerWidth < 1024) {
                      openBottomSheet();
                    } else {
                      createNewCombo();
                    }
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (draggedMovement) {
                    setDragOverCombo('new');
                  }
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setDragOverCombo(null);
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (draggedMovement) {
                    if (draggedMovement.isCombo) {
                      // Handle combo movements
                      const newCombo = handleComboMovementDrag(draggedMovement);
                      if (newCombo) {
                        setCombos([...combos, newCombo]);
                      }
                    } else {
                      // Create new combo and add movement
                      const newCombo = {
                        id: Date.now(),
                        movements: [draggedMovement],
                        connections: [],
                        expanded: true
                      };
                      setCombos([...combos, newCombo]);
                    }
                  }
                  setDraggedMovement(null);
                }}
              >
                <Plus className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm hidden lg:block">
                  {draggedMovement 
                    ? '📦 Drop here to create another combo!' 
                    : '➕ Drag a movement here to create a new combo'
                  }
                </p>
                <p className="text-sm lg:hidden">
                  ➕ Tap to add another movement
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Sheet for Mobile */}
      <BottomSheet
        isOpen={showBottomSheet}
        onClose={closeBottomSheet}
        title="📚 Select Movement"
      >
        <MovementPicker />
      </BottomSheet>
    </div>
  );
};

export default WushuNanduCalculator;