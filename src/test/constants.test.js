import { describe, it, expect } from 'vitest';
import { SCORING_LIMITS, GRADE_POINTS, CONNECTION_POINTS, STYLE_CATEGORIES } from '../data/constants.js';

describe('Constants', () => {
  describe('SCORING_LIMITS', () => {
    it('should have correct movement score cap', () => {
      expect(SCORING_LIMITS.MOVEMENT_SCORE_CAP).toBe(1.4);
    });

    it('should have correct connection score cap', () => {
      expect(SCORING_LIMITS.CONNECTION_SCORE_CAP).toBe(0.6);
    });

    it('should have correct total score cap', () => {
      expect(SCORING_LIMITS.TOTAL_SCORE_CAP).toBe(2.0);
    });

    it('should maintain total equals movement plus connection', () => {
      expect(SCORING_LIMITS.TOTAL_SCORE_CAP).toBe(
        SCORING_LIMITS.MOVEMENT_SCORE_CAP + SCORING_LIMITS.CONNECTION_SCORE_CAP
      );
    });
  });

  describe('GRADE_POINTS', () => {
    it('should have correct grade point values', () => {
      expect(GRADE_POINTS.A).toBe(0.2);
      expect(GRADE_POINTS.B).toBe(0.3);
      expect(GRADE_POINTS.C).toBe(0.4);
    });

    it('should have ascending point values', () => {
      expect(GRADE_POINTS.A).toBeLessThan(GRADE_POINTS.B);
      expect(GRADE_POINTS.B).toBeLessThan(GRADE_POINTS.C);
    });
  });

  describe('CONNECTION_POINTS', () => {
    it('should have correct connection point values', () => {
      expect(CONNECTION_POINTS.A).toBe(0.1);
      expect(CONNECTION_POINTS.B).toBe(0.15);
      expect(CONNECTION_POINTS.C).toBe(0.2);
      expect(CONNECTION_POINTS.D).toBe(0.25);
    });

    it('should have ascending point values', () => {
      expect(CONNECTION_POINTS.A).toBeLessThan(CONNECTION_POINTS.B);
      expect(CONNECTION_POINTS.B).toBeLessThan(CONNECTION_POINTS.C);
      expect(CONNECTION_POINTS.C).toBeLessThan(CONNECTION_POINTS.D);
    });
  });

  describe('STYLE_CATEGORIES', () => {
    it('should have all three styles defined', () => {
      expect(STYLE_CATEGORIES.northern).toBeDefined();
      expect(STYLE_CATEGORIES.southern).toBeDefined();
      expect(STYLE_CATEGORIES.taiji).toBeDefined();
    });

    it('should have correct northern categories', () => {
      expect(STYLE_CATEGORIES.northern).toEqual([
        'Jumping', 'Stance', 'Balance', 'Sweeps', 'Throw/Catch'
      ]);
    });

    it('should have correct southern categories', () => {
      expect(STYLE_CATEGORIES.southern).toEqual([
        'Jumping', 'Stance', 'Leg', 'Tumbling'
      ]);
    });

    it('should have correct taiji categories', () => {
      expect(STYLE_CATEGORIES.taiji).toEqual([
        'Balance', 'Jumping', 'Stance', 'Leg'
      ]);
    });

    it('should have unique categories per style', () => {
      // Northern has unique categories
      expect(STYLE_CATEGORIES.northern).toContain('Balance');
      expect(STYLE_CATEGORIES.northern).toContain('Sweeps');
      expect(STYLE_CATEGORIES.northern).toContain('Throw/Catch');
      
      // Southern has unique categories
      expect(STYLE_CATEGORIES.southern).toContain('Tumbling');
      
      // Taiji has unique category focus
      expect(STYLE_CATEGORIES.taiji[0]).toBe('Balance'); // Balance is first
    });

    it('should all contain common basic categories', () => {
      ['northern', 'southern', 'taiji'].forEach(style => {
        expect(STYLE_CATEGORIES[style]).toContain('Jumping');
        expect(STYLE_CATEGORIES[style]).toContain('Stance');
      });
    });
  });
});