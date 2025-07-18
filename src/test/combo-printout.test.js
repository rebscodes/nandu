import { describe, it, expect } from 'vitest';
import { generateComboPrintout } from '../utils/combo-printout.js';

describe('Combo Printout Generation', () => {
  
  // Mock movements for testing
  const mockMovements = {
    move1: { id: '324A', points: 0.3, name: 'Flying Front Slap Kick' },
    move2: { id: '312A', points: 0.2, name: 'Jumping Front Slap Kick' },
    move3: { id: '335A', points: 0.4, name: 'Butterfly Kick' },
    move4: { id: '323A', points: 0.3, name: 'Tornado Kick' },
    throw: { id: 'THROW', points: 0, name: 'Throw' },
    catch: { id: 'CATCH', points: 0, name: 'Catch' },
    stance: { id: 'STANCE1', points: 0, name: 'Bow Stance' }
  };

  // Mock connections for testing
  const mockConnections = {
    conn1: { from: '324A', to: '312A', points: 0.1, grade: 'A' },
    conn2: { from: '312A', to: '335A', points: 0.15, grade: 'B' },
    conn3: { from: '323A', to: '324A', points: 0.1, grade: 'A' }
  };

  describe('Single Movement Combos', () => {
    
    it('generates correct output for single movement combo', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A');
    });

    it('handles single movement with stance', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.stance],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, STANCE1');
    });
  });

  describe('Two Movement Combos', () => {
    
    it('generates correct output for two movements with connection', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2],
          connections: [mockConnections.conn1],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+312A');
    });

    it('generates correct output for two movements without connection', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, 312A');
    });
  });

  describe('Three Movement Combos', () => {
    
    it('generates correct output for three movements with full chain connection', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2, mockMovements.move3],
          connections: [mockConnections.conn1, mockConnections.conn2],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+312A+335A');
    });

    it('generates correct output for three movements with partial connections', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2, mockMovements.move3],
          connections: [mockConnections.conn1], // Only first two connected
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+312A, 335A');
    });

    it('generates correct output for three movements without connections', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2, mockMovements.move3],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, 312A, 335A');
    });
  });

  describe('Throw/Catch Combos', () => {
    
    it('generates correct output for throw/catch combo', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.throw, mockMovements.move1, mockMovements.catch],
          connections: [],
          isThrowCatchCombo: true,
          comboMovement: {
            coreMovementId: '324A'
          }
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+9');
    });

    it('handles throw/catch combo without comboMovement', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.throw, mockMovements.move1, mockMovements.catch],
          connections: [],
          isThrowCatchCombo: true
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('THROW, 324A, CATCH');
    });
  });

  describe('Multiple Combos', () => {
    
    it('generates correct output for multiple combos', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2],
          connections: [mockConnections.conn1],
          isThrowCatchCombo: false
        },
        {
          id: 2,
          movements: [mockMovements.move3],
          connections: [],
          isThrowCatchCombo: false
        },
        {
          id: 3,
          movements: [mockMovements.throw, mockMovements.move4, mockMovements.catch],
          connections: [],
          isThrowCatchCombo: true,
          comboMovement: {
            coreMovementId: '323A'
          }
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+312A, 335A, 323A+9');
    });

    it('generates correct output for complex multi-combo scenario', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move4, mockMovements.move1],
          connections: [mockConnections.conn3],
          isThrowCatchCombo: false
        },
        {
          id: 2,
          movements: [mockMovements.move2, mockMovements.move3],
          connections: [mockConnections.conn2],
          isThrowCatchCombo: false
        },
        {
          id: 3,
          movements: [mockMovements.move1],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('323A+324A, 312A+335A, 324A');
    });
  });

  describe('Edge Cases', () => {
    
    it('handles empty combos array', () => {
      const result = generateComboPrintout([]);
      expect(result).toBe('');
    });

    it('handles combo with no movements', () => {
      const combos = [
        {
          id: 1,
          movements: [],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('');
    });

    it('filters out empty combos from result', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1],
          connections: [],
          isThrowCatchCombo: false
        },
        {
          id: 2,
          movements: [],
          connections: [],
          isThrowCatchCombo: false
        },
        {
          id: 3,
          movements: [mockMovements.move2],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, 312A');
    });

    it('handles movements with isCombo flag (should be filtered out)', () => {
      const comboMovement = { id: 'COMBO1', points: 0.5, isCombo: true };
      
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, comboMovement, mockMovements.move2],
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, 312A');
    });

    it('handles undefined connections array', () => {
      const combos = [
        {
          id: 1,
          movements: [mockMovements.move1, mockMovements.move2],
          connections: undefined,
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A, 312A');
    });
  });

  describe('Real-world Examples', () => {
    
    it('matches expected output format: "324A+6, 312A+335A, 323A+1"', () => {
      // Create movements that would produce this output
      const realMovements = {
        move324A: { id: '324A', points: 0.3 },
        move6: { id: '6', points: 0.2 },
        move312A: { id: '312A', points: 0.2 },
        move335A: { id: '335A', points: 0.4 },
        move323A: { id: '323A', points: 0.3 },
        move1: { id: '1', points: 0.1 }
      };
      
      const realConnections = {
        conn1: { from: '324A', to: '6', points: 0.1 },
        conn2: { from: '312A', to: '335A', points: 0.15 },
        conn3: { from: '323A', to: '1', points: 0.1 }
      };
      
      const combos = [
        {
          id: 1,
          movements: [realMovements.move324A, realMovements.move6],
          connections: [realConnections.conn1],
          isThrowCatchCombo: false
        },
        {
          id: 2,
          movements: [realMovements.move312A, realMovements.move335A],
          connections: [realConnections.conn2],
          isThrowCatchCombo: false
        },
        {
          id: 3,
          movements: [realMovements.move323A, realMovements.move1],
          connections: [realConnections.conn3],
          isThrowCatchCombo: false
        }
      ];
      
      const result = generateComboPrintout(combos);
      expect(result).toBe('324A+6, 312A+335A, 323A+1');
    });
  });
});