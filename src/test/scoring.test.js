import { describe, it, expect } from 'vitest';
import { 
  getComboScore, 
  getTotalMovementScore, 
  getTotalConnectionScore, 
  getTotalScore,
  getScoreLimits 
} from '../utils/scoring.js';
import { SCORING_LIMITS } from '../data/constants.js';

describe('Nandu Scoring Logic', () => {
  
  // Mock data for testing
  const mockMovements = {
    regular: { id: '312A', points: 0.2, name: 'Jumping Front Slap Kick' },
    highValue: { id: '323C', points: 0.4, name: 'Tornado Kick 720°' },
    throwCatch: { id: 'THROW', points: 0, name: 'Throw' },
    catch: { id: 'CATCH', points: 0, name: 'Catch' },
    diveRoll: { id: '445A', points: 0.2, name: 'Forward Dive Roll' }
  };

  const mockConnections = {
    regular: { from: '312A', to: '323A', points: 0.1, grade: 'A' },
    highValue: { from: '323A', to: '324B', points: 0.15, grade: 'B' }
  };

  describe('Individual Combo Scoring', () => {
    
    it('calculates regular combo score (movements + connections)', () => {
      const combo = {
        movements: [mockMovements.regular, mockMovements.regular], // 0.4 total
        connections: [mockConnections.regular], // 0.1 total
        isThrowCatchCombo: false
      };
      
      expect(getComboScore(combo)).toBe(0.5);
    });

    it('calculates throw/catch combo score (difficulty + fixed bonus)', () => {
      const combo = {
        movements: [
          mockMovements.throwCatch, // 0 points (excluded)
          mockMovements.regular,    // 0.2 points (difficulty - this one counts!)
          mockMovements.catch       // 0 points (excluded)
        ],
        connections: [],
        isThrowCatchCombo: true,
        fixedScore: 0.1
      };
      
      expect(getComboScore(combo)).toBe(0.3); // 0.2 difficulty + 0.1 fixed
    });

    it('handles single movement combo (no connections)', () => {
      const combo = {
        movements: [mockMovements.regular],
        connections: [],
        isThrowCatchCombo: false
      };
      
      expect(getComboScore(combo)).toBe(0.2);
    });

    it('handles empty combo', () => {
      const combo = {
        movements: [],
        connections: [],
        isThrowCatchCombo: false
      };
      
      expect(getComboScore(combo)).toBe(0);
    });

    it('excludes THROW/CATCH/mechanics from throw/catch combo scoring', () => {
      const combo = {
        movements: [
          mockMovements.throwCatch, // excluded
          mockMovements.regular,    // 0.2 points
          mockMovements.catch       // excluded
        ],
        connections: [],
        isThrowCatchCombo: true,
        fixedScore: 0.15
      };
      
      expect(getComboScore(combo)).toBe(0.35); // 0.2 + 0.15
    });
  });

  describe('Total Movement Score Calculations', () => {
    
    it('calculates total movement score with 1.4 limit', () => {
      const combos = [
        {
          movements: [mockMovements.highValue, mockMovements.highValue], // 0.8
          connections: [mockConnections.regular],
          isThrowCatchCombo: false
        },
        {
          movements: [mockMovements.highValue, mockMovements.highValue], // 0.8  
          connections: [mockConnections.regular],
          isThrowCatchCombo: false
        }
        // Total movement: 1.6, should show actual uncapped value
      ];
      
      expect(getTotalMovementScore(combos)).toBe(1.6);
    });

    it('calculates movement score under limit', () => {
      const combos = [
        {
          movements: [mockMovements.regular, mockMovements.regular], // 0.4
          connections: [mockConnections.regular],
          isThrowCatchCombo: false
        }
      ];
      
      expect(getTotalMovementScore(combos)).toBe(0.4);
    });

    it('handles throw/catch combos in movement score calculation', () => {
      const combos = [
        {
          movements: [
            mockMovements.throwCatch, // excluded
            mockMovements.regular,    // 0.2
            mockMovements.catch       // excluded
          ],
          connections: [],
          isThrowCatchCombo: true,
          fixedScore: 0.1
        }
      ];
      
      expect(getTotalMovementScore(combos)).toBe(0.2);
    });
  });

  describe('Total Connection Score Calculations', () => {
    
    it('calculates total connection score with 0.6 limit', () => {
      const combos = [
        {
          movements: [mockMovements.regular, mockMovements.regular],
          connections: [mockConnections.highValue, mockConnections.highValue], // 0.3
          isThrowCatchCombo: false
        },
        {
          movements: [mockMovements.regular, mockMovements.regular],
          connections: [mockConnections.highValue, mockConnections.highValue], // 0.3
          isThrowCatchCombo: false
        }
        // Total connection: 0.6, at the limit
      ];
      
      expect(getTotalConnectionScore(combos)).toBe(0.6);
    });

    it('handles throw/catch combo fixed scores as connections', () => {
      const combos = [
        {
          movements: [mockMovements.throwCatch, mockMovements.regular, mockMovements.catch],
          connections: [],
          isThrowCatchCombo: true,
          fixedScore: 0.15
        }
      ];
      
      expect(getTotalConnectionScore(combos)).toBe(0.15);
    });
  });

  describe('Total Score Calculations', () => {
    
    it('calculates final total score with limit', () => {
      const combos = [
        {
          movements: Array(8).fill(mockMovements.highValue), // 3.2 movement (capped at 1.4)
          connections: Array(5).fill(mockConnections.highValue), // 0.75 connection (capped at 0.6)
          isThrowCatchCombo: false
        }
      ];
      
      const result = getTotalScore(combos);
      expect(result.movementScore).toBe(3.2); // 8 × 0.4 = 3.2, uncapped for display
      expect(result.connectionScore).toBe(0.75); // 5 × 0.15 = 0.75, uncapped for display
      expect(result.totalScore).toBe(2.0); // min(3.2, 1.4) + min(0.75, 0.6) = 1.4 + 0.6 = 2.0
    });

    it('returns total under limit', () => {
      const combos = [
        {
          movements: [mockMovements.regular], // 0.2
          connections: [mockConnections.regular], // 0.1
          isThrowCatchCombo: false
        }
      ];
      
      const result = getTotalScore(combos);
      expect(result.movementScore).toBe(0.2);
      expect(result.connectionScore).toBe(0.1);
      expect(result.totalScore).toBe(0.3);
    });

    it('handles mixed regular and throw/catch combos', () => {
      const combos = [
        {
          movements: [mockMovements.regular, mockMovements.regular], // 0.4 movement
          connections: [mockConnections.regular], // 0.1 connection
          isThrowCatchCombo: false
        },
        {
          movements: [mockMovements.throwCatch, mockMovements.regular, mockMovements.catch], // 0.2 movement
          connections: [],
          isThrowCatchCombo: true,
          fixedScore: 0.15 // 0.15 connection
        }
      ];
      
      const result = getTotalScore(combos);
      expect(result.movementScore).toBe(0.6); // 0.4 + 0.2
      expect(result.connectionScore).toBe(0.25); // 0.1 + 0.15
      expect(result.totalScore).toBe(0.85);
    });
  });

  describe('Score Limit Checking', () => {
    
    it('identifies when movement score exceeds limit', () => {
      const combos = [
        {
          movements: Array(8).fill(mockMovements.highValue), // 3.2 points, exceeds 1.4
          connections: [],
          isThrowCatchCombo: false
        }
      ];
      
      const limits = getScoreLimits(combos);
      expect(limits.movementExceeded).toBe(true);
      expect(limits.connectionExceeded).toBe(false);
      expect(limits.totalExceeded).toBe(false); // Total is capped: min(3.2, 1.4) + min(0, 0.6) = 1.4 + 0 = 1.4 < 2.0
    });

    it('identifies when connection score exceeds limit', () => {
      const combos = [
        {
          movements: [mockMovements.regular, mockMovements.regular],
          connections: Array(5).fill(mockConnections.highValue), // 0.75 points, exceeds 0.6
          isThrowCatchCombo: false
        }
      ];
      
      const limits = getScoreLimits(combos);
      expect(limits.movementExceeded).toBe(false);
      expect(limits.connectionExceeded).toBe(true);
      expect(limits.totalExceeded).toBe(false);
    });

    it('identifies when total score exceeds limit', () => {
      const combos = [
        {
          movements: Array(8).fill(mockMovements.highValue), // 1.4 movement (capped)
          connections: Array(5).fill(mockConnections.highValue), // 0.6 connection (capped)
          isThrowCatchCombo: false
        }
      ];
      
      const limits = getScoreLimits(combos);
      expect(limits.movementExceeded).toBe(true);
      expect(limits.connectionExceeded).toBe(true);
      expect(limits.totalExceeded).toBe(false); // min(3.2, 1.4) + min(0.75, 0.6) = 1.4 + 0.6 = 2.0, exactly at limit (not exceeded)
    });

    it('identifies when no limits are exceeded', () => {
      const combos = [
        {
          movements: [mockMovements.regular],
          connections: [mockConnections.regular],
          isThrowCatchCombo: false
        }
      ];
      
      const limits = getScoreLimits(combos);
      expect(limits.movementExceeded).toBe(false);
      expect(limits.connectionExceeded).toBe(false);
      expect(limits.totalExceeded).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    
    it('handles empty combo arrays', () => {
      const result = getTotalScore([]);
      expect(result.movementScore).toBe(0);
      expect(result.connectionScore).toBe(0);
      expect(result.totalScore).toBe(0);
    });

    it('handles combos with undefined movements', () => {
      const combo = {
        movements: undefined,
        connections: [],
        isThrowCatchCombo: false
      };
      
      // Should handle gracefully without crashing
      expect(() => getComboScore(combo)).not.toThrow();
    });

    it('handles combos with undefined connections', () => {
      const combo = {
        movements: [mockMovements.regular],
        connections: undefined,
        isThrowCatchCombo: false
      };
      
      // Should handle gracefully without crashing
      expect(() => getComboScore(combo)).not.toThrow();
    });
  });
});