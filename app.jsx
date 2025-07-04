import React, { useState, useEffect } from 'react';
import { Search, Plus, X, RotateCcw, Calculator, ChevronDown, ChevronUp } from 'lucide-react';

const WushuNanduCalculator = () => {
  // Movement database based on the provided tables
  const movements = [
    // Balance Techniques
    { id: '111A', name: 'Bān Tuǐ Cháo Tiān Zhí Lì', english: 'Grasp the foot and bring it to head level', category: 'Balance', grade: 'A', points: 0.2 },
    { id: '112A', name: 'Cè Tī Bào Jiǎo Zhí Lì', english: 'Side kick up to catch the foot at head level', category: 'Balance', grade: 'A', points: 0.2 },
    { id: '133B', name: 'Shí Zì Píng Héng', english: 'Forward Leaning Balance with Arms Outspread', category: 'Balance', grade: 'B', points: 0.3 },
    { id: '123A', name: 'Yǎng Shēn Píng Héng', english: 'Backward Leaning Balance', category: 'Balance', grade: 'A', points: 0.2 },
    { id: '153A', name: 'Tàn Hǎi Píng Héng', english: 'Exploring the Ocean Balance', category: 'Balance', grade: 'A', points: 0.2 },
    { id: '163A', name: 'Wàng Yuè Píng Héng', english: 'Gazing at the Moon Balance', category: 'Balance', grade: 'A', points: 0.2 },
    
    // Leg Techniques
    { id: '244A', name: 'Qián Sǎo Tuǐ 540°', english: 'Front Sweep 540°', category: 'Leg', grade: 'A', points: 0.2 },
    { id: '244B', name: 'Qián Sǎo Tuǐ 900°', english: 'Front Sweep 900°', category: 'Leg', grade: 'B', points: 0.3 },
    
    // Jumping Techniques
    { id: '312A', name: 'Téng Kōng Fēi Jiǎo', english: 'Jumping Front Slap Kick', category: 'Jumping', grade: 'A', points: 0.2 },
    { id: '312B', name: 'Téng Kōng Zhèng Tī Tuǐ', english: 'Jumping Front Straight Kick', category: 'Jumping', grade: 'B', points: 0.3 },
    { id: '323A', name: 'Xuàn Fēng Jiǎo 360°', english: 'Tornado Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
    { id: '323B', name: 'Xuàn Fēng Jiǎo 540°', english: 'Tornado Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
    { id: '323C', name: 'Xuàn Fēng Jiǎo 630°(F)/720°', english: 'Tornado Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
    { id: '324A', name: 'Téng Kōng Bǎi Lián 360°', english: 'Jumping Lotus Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
    { id: '324B', name: 'Téng Kōng Bǎi Lián 540°', english: 'Jumping Lotus Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
    { id: '324C', name: 'Téng Kōng Bǎi Lián 630°(F)/720°', english: 'Jumping Lotus Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
    { id: '333A', name: 'Xuànzi', english: 'Butterfly Kick', category: 'Jumping', grade: 'A', points: 0.2 },
    { id: '353B', name: 'Xuàn Zǐ Zhuǎn Tǐ 360°', english: 'Butterfly Twist 360°', category: 'Jumping', grade: 'B', points: 0.3 },
    { id: '353C', name: 'Xuàn Zǐ Zhuǎn Tǐ 720°', english: 'Butterfly Twist 720°', category: 'Jumping', grade: 'C', points: 0.4 },
    { id: '335A', name: 'Cè Kōng Fān', english: 'Aerial Cartwheel', category: 'Jumping', grade: 'A', points: 0.2 },
    { id: '355B', name: 'Cè Kōng Fān Zhuǎn Tǐ 360°', english: 'Aerial Cartwheel Twist 360°', category: 'Jumping', grade: 'B', points: 0.3 },
    
    // Stances for connections
    { id: '1', name: 'Mǎ Bù', english: 'Horse Stance', category: 'Stance', grade: '-', points: 0 },
    { id: '3', name: 'Tí Xī Dú Lì', english: 'Single Raised-Knee Stance', category: 'Stance', grade: '-', points: 0 },
    { id: '4', name: 'Diē Shù Chà', english: 'Falling Front Split', category: 'Stance', grade: '-', points: 0 },
    { id: '6', name: 'Zuò Pán', english: 'Cross-Legged Sitting', category: 'Stance', grade: '-', points: 0 },
    { id: '0', name: 'Pū Bù', english: 'Crouching Stance', category: 'Stance', grade: '-', points: 0 },
    { id: '7', name: 'Gōng Bù', english: 'Bow Stance', category: 'Stance', grade: '-', points: 0 }
  ];

  // Connection database based on the provided tables
  const connections = [
    // A Grade Connections (0.1 points)
    { from: '244A', to: '6', points: 0.1, grade: 'A', description: 'Front Sweep 540° + Cross-Legged Sitting' },
    { from: '312A', to: '6', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Cross-Legged Sitting' },
    { from: '312A', to: '323A', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Tornado Kick 360° (within 2 steps)' },
    { from: '312A', to: '324A', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 360° (within 2 steps)' },
    { from: '312A', to: '353B', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Butterfly Twist 360° (within 4 steps)' },
    { from: '323A', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Single Raised-Knee Stance' },
    { from: '323A', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Horse Stance' },
    { from: '323A', to: '4', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Falling Front Split' },
    { from: '323A', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Cross-Legged Sitting' },
    { from: '323A', to: '324A', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Jumping Lotus Kick 360°' },
    { from: '323B', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Horse Stance' },
    { from: '323B', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Single Raised-Knee Stance' },
    { from: '323B', to: '4', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Falling Front Split' },
    { from: '323B', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Cross-Legged Sitting' },
    { from: '323B', to: '324B', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Jumping Lotus Kick 540°' },
    { from: '323C', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 630°(F)/720° + Horse Stance' },
    { from: '323C', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 630°(F)/720° + Cross-Legged Sitting' },
    { from: '333A', to: '6', points: 0.1, grade: 'A', description: 'Butterfly Kick + Cross-Legged Sitting' },
    
    // B Grade Connections (0.15 points)
    { from: '312A', to: '335A', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Aerial Cartwheel (within 1 step)' },
    { from: '312A', to: '323B', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Tornado Kick 540° (within 2 steps)' },
    { from: '312A', to: '324B', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 540°' },
    { from: '323A', to: '324B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + Jumping Lotus Kick 540°' },
    { from: '323A', to: '353B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + Butterfly Twist 360° (within 4 steps)' },
    { from: '324A', to: '3', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 360° + Single Raised-Knee Stance' },
    { from: '324B', to: '0', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Crouching Stance' },
    { from: '324B', to: '1', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Horse Stance' },
    { from: '324B', to: '3', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Single Raised-Knee Stance' },
    { from: '324A', to: '1', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Horse Stance' },
    { from: '324B', to: '6', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Cross-Legged Sitting' },
    { from: '324C', to: '6', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 630°(F)/720° + Cross-Legged Sitting' },
    
    // C Grade Connections (0.2 points)
    { from: '312A', to: '323C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Tornado Kick 630°(F)/720° (within 4 steps)' },
    { from: '312A', to: '324C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 630°(F)/720°' },
    { from: '312A', to: '353C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Butterfly Twist 720° (within 4 steps)' },
    { from: '323A', to: '353C', points: 0.2, grade: 'C', description: 'Tornado Kick 360° + Butterfly Twist 720° (within 4 steps)' },
    { from: '324A', to: '4', points: 0.2, grade: 'C', description: 'Jumping Lotus Kick 360° + Falling Front Split' },
    { from: '333A', to: '244A', points: 0.2, grade: 'C', description: 'Butterfly Kick + Front Sweep 540°' },
    { from: '333A', to: '353C', points: 0.2, grade: 'C', description: 'Butterfly Kick + Butterfly Twist 720° (within 4 steps)' },
    
    // D Grade Connections (0.25 points)
    { from: '323B', to: '324C', points: 0.25, grade: 'D', description: 'Tornado Kick 540° + Jumping Lotus Kick 630°(F)/720°' },
    { from: '323C', to: '4', points: 0.25, grade: 'D', description: 'Tornado Kick 630°(F)/720° + Falling Front Split' },
    { from: '324C', to: '1', points: 0.25, grade: 'D', description: 'Jumping Lotus Kick 630°(F)/720° + Horse Stance' },
    { from: '353C', to: '4', points: 0.25, grade: 'D', description: 'Butterfly Twist 720° + Falling Front Split' }
  ];

  const [combos, setCombos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Balance', 'Leg', 'Jumping', 'Stance'];

  const filteredMovements = movements.filter(movement => {
    const matchesSearch = movement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movement.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movement.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || movement.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    // Sort by points (ascending), then by grade (A, B, C, D), then by name
    if (a.points !== b.points) return a.points - b.points;
    if (a.grade !== b.grade) return a.grade.localeCompare(b.grade);
    return a.name.localeCompare(b.name);
  });

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
          const connection = connections.find(conn => 
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
          const connection = connections.find(conn => 
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

  const getComboScore = (combo) => {
    const movementPoints = combo.movements.reduce((sum, mov) => sum + mov.points, 0);
    const connectionPoints = combo.connections.reduce((sum, conn) => sum + conn.points, 0);
    return movementPoints + connectionPoints;
  };

  // Calculate total scores
  const totalMovementScore = Math.min(
    combos.reduce((sum, combo) => 
      sum + combo.movements.reduce((movSum, mov) => movSum + mov.points, 0), 0
    ), 1.4
  );

  const totalConnectionScore = Math.min(
    combos.reduce((sum, combo) => 
      sum + combo.connections.reduce((connSum, conn) => connSum + conn.points, 0), 0
    ), 0.6
  );

  const totalScore = Math.min(totalMovementScore + totalConnectionScore, 2.0);

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'C': return 'bg-purple-100 text-purple-800';
      case 'D': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold text-gray-800">Wushu Taolu Nandu Calculator</h1>
        </div>
        <p className="text-gray-600">Build combos by adding movements in sequence - connections are detected automatically</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Movement Selection Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Movement Library</h2>
          
          {/* Search and Filter */}
          <div className="mb-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search movements..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Movement List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredMovements.map(movement => (
              <div key={movement.id} className="border border-gray-200 rounded-lg p-3 mb-2 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {movement.grade !== '-' && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(movement.grade)}`}>
                          {movement.grade}
                        </span>
                      )}
                      <span className="text-sm font-medium text-gray-600">{movement.id}</span>
                      {movement.points > 0 && (
                        <span className="text-sm font-bold text-gray-800">{movement.points}pts</span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-800 mb-1">{movement.name}</div>
                    <div className="text-xs text-gray-600">{movement.english}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Routine Builder Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Your Routine</h2>
            <div className="flex gap-2">
              <button
                onClick={createNewCombo}
                className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                <Plus className="h-4 w-4" />
                New Combo
              </button>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Clear All
              </button>
            </div>
          </div>

          {/* Score Summary */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600">Movements</div>
                <div className={`text-lg font-bold ${
                  combos.reduce((sum, combo) => sum + combo.movements.reduce((movSum, mov) => movSum + mov.points, 0), 0) > 1.4 
                    ? 'text-red-600' : 'text-gray-800'
                }`}>
                  {combos.reduce((sum, combo) => sum + combo.movements.reduce((movSum, mov) => movSum + mov.points, 0), 0).toFixed(2)}/1.40
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Connections</div>
                <div className={`text-lg font-bold ${
                  combos.reduce((sum, combo) => sum + combo.connections.reduce((connSum, conn) => connSum + conn.points, 0), 0) > 0.6 
                    ? 'text-red-600' : 'text-gray-800'
                }`}>
                  {combos.reduce((sum, combo) => sum + combo.connections.reduce((connSum, conn) => connSum + conn.points, 0), 0).toFixed(2)}/0.60
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-xl font-bold text-red-600">{totalScore.toFixed(2)}/2.00</div>
              </div>
            </div>
          </div>

          {/* Combos */}
          <div className="max-h-96 overflow-y-auto">
            {combos.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <Calculator className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>Create your first combo to start building your routine</p>
              </div>
            ) : (
              combos.map((combo, comboIndex) => (
                <div key={combo.id} className="border border-gray-200 rounded-lg p-3 mb-3">
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
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {combo.expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => removeCombo(combo.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {combo.expanded && (
                    <div>
                      {/* Add Movement Dropdown */}
                      <div className="mb-3">
                        <select
                          onChange={(e) => {
                            const movement = movements.find(m => m.id === e.target.value);
                            if (movement) {
                              addMovementToCombo(combo.id, movement);
                              e.target.value = '';
                            }
                          }}
                          className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Add movement to combo...</option>
                          {movements.map(movement => (
                            <option key={movement.id} value={movement.id}>
                              {movement.name} ({movement.id}) - {movement.points}pts
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Movements in Combo */}
                      {combo.movements.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">No movements yet - add your first movement above</p>
                      ) : (
                        <div className="space-y-2">
                          {combo.movements.map((movement, movIndex) => (
                            <div key={movIndex}>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
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
                                <button
                                  onClick={() => removeMovementFromCombo(combo.id, movIndex)}
                                  className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                              
                              {/* Show connection after this movement */}
                              {combo.connections[movIndex] && (
                                <div className="ml-4 mt-1 p-2 bg-green-50 rounded border-l-4 border-green-400">
                                  <div className="text-xs text-green-800 font-medium">
                                    Connection: +{combo.connections[movIndex].points}pts ({combo.connections[movIndex].grade} Grade)
                                  </div>
                                  <div className="text-xs text-green-600">
                                    {combo.connections[movIndex].description}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WushuNanduCalculator;