import { describe, it, expect } from 'vitest';
import { movements, connections } from '../data/codes.js';
import { southernMovements, southernConnections } from '../data/southern-nandu-codes.js';
import { taijiMovements, taijiConnections } from '../data/taiji-nandu-codes.js';
import { STYLE_CATEGORIES } from '../data/constants.js';

describe('Style Integration', () => {
  
  describe('Data Structure Consistency', () => {
    it('should have consistent movement structure across all styles', () => {
      const allMovements = [
        ...movements,
        ...southernMovements, 
        ...taijiMovements
      ];
      
      allMovements.forEach(movement => {
        expect(movement).toHaveProperty('id');
        expect(movement).toHaveProperty('name');
        expect(movement).toHaveProperty('chinese');
        expect(movement).toHaveProperty('english');
        expect(movement).toHaveProperty('category');
        expect(movement).toHaveProperty('grade');
        expect(movement).toHaveProperty('points');
        
        // Validate types
        expect(typeof movement.id).toBe('string');
        expect(typeof movement.name).toBe('string');
        expect(typeof movement.chinese).toBe('string');
        expect(typeof movement.english).toBe('string');
        expect(typeof movement.category).toBe('string');
        expect(typeof movement.points).toBe('number');
      });
    });

    it('should have consistent connection structure across all styles', () => {
      const allConnections = [
        ...connections,
        ...southernConnections,
        ...taijiConnections
      ];
      
      allConnections.forEach(connection => {
        expect(connection).toHaveProperty('from');
        expect(connection).toHaveProperty('to');
        expect(connection).toHaveProperty('points');
        expect(connection).toHaveProperty('grade');
        expect(connection).toHaveProperty('description');
        
        // Validate types
        expect(typeof connection.from).toBe('string');
        expect(typeof connection.to).toBe('string');
        expect(typeof connection.points).toBe('number');
        expect(typeof connection.grade).toBe('string');
        expect(typeof connection.description).toBe('string');
      });
    });
  });

  describe('Northern Style (Default)', () => {
    it('should have expected number of movements', () => {
      expect(movements.length).toBeGreaterThan(0);
    });

    it('should have expected number of connections', () => {
      expect(connections.length).toBeGreaterThan(0);
    });

    it('should have movements that match northern categories', () => {
      const categories = movements.map(m => m.category);
      const uniqueCategories = [...new Set(categories)];
      
      // Should contain all northern categories (plus Hidden and others)
      STYLE_CATEGORIES.northern.forEach(category => {
        if (category === 'Sweeps') {
          // Sweeps is mapped to Leg category in the data
          expect(uniqueCategories).toContain('Leg');
        } else {
          expect(uniqueCategories).toContain(category);
        }
      });
    });
  });

  describe('Southern Style', () => {
    it('should have expected movements for southern style', () => {
      expect(southernMovements.length).toBeGreaterThan(0);
      expect(southernMovements.length).toBeLessThan(movements.length); // Should be more focused
    });

    it('should have movements that match southern categories', () => {
      const categories = southernMovements.map(m => m.category);
      const uniqueCategories = [...new Set(categories)];
      
      STYLE_CATEGORIES.southern.forEach(category => {
        expect(uniqueCategories).toContain(category);
      });
    });

    it('should have tumbling movements unique to southern', () => {
      const tumblingMovements = southernMovements.filter(m => m.category === 'Tumbling');
      expect(tumblingMovements.length).toBeGreaterThan(0);
      
      // Northern shouldn't have tumbling
      const northernTumbling = movements.filter(m => m.category === 'Tumbling');
      expect(northernTumbling.length).toBe(0);
    });

    it('should have valid connections between southern movements', () => {
      southernConnections.forEach(connection => {
        const fromMovement = southernMovements.find(m => m.id === connection.from);
        const toMovement = southernMovements.find(m => m.id === connection.to);
        
        expect(fromMovement).toBeDefined();
        expect(toMovement).toBeDefined();
      });
    });
  });

  describe('Taiji Style', () => {
    it('should have expected movements for taiji style', () => {
      expect(taijiMovements.length).toBeGreaterThan(0);
      expect(taijiMovements.length).toBeLessThan(movements.length); // Should be most focused
    });

    it('should have movements that match taiji categories', () => {
      const categories = taijiMovements.map(m => m.category);
      const uniqueCategories = [...new Set(categories)];
      
      STYLE_CATEGORIES.taiji.forEach(category => {
        expect(uniqueCategories).toContain(category);
      });
    });

    it('should prioritize balance movements', () => {
      const balanceMovements = taijiMovements.filter(m => m.category === 'Balance');
      expect(balanceMovements.length).toBeGreaterThan(0);
      
      // Should have higher proportion of balance moves than other styles
      const balanceRatio = balanceMovements.length / taijiMovements.length;
      expect(balanceRatio).toBeGreaterThan(0.1); // At least 10% balance movements
    });

    it('should have valid connections between taiji movements', () => {
      taijiConnections.forEach(connection => {
        const fromMovement = taijiMovements.find(m => m.id === connection.from);
        const toMovement = taijiMovements.find(m => m.id === connection.to);
        
        expect(fromMovement).toBeDefined();
        expect(toMovement).toBeDefined();
      });
    });
  });

  describe('Cross-Style Validation', () => {
    it('should have some shared movement IDs across styles', () => {
      const northernIds = new Set(movements.map(m => m.id));
      const southernIds = new Set(southernMovements.map(m => m.id));
      const taijiIds = new Set(taijiMovements.map(m => m.id));
      
      // Some movements should appear in multiple styles
      const northernSouthernOverlap = [...northernIds].filter(id => southernIds.has(id));
      const northernTaijiOverlap = [...northernIds].filter(id => taijiIds.has(id));
      
      expect(northernSouthernOverlap.length).toBeGreaterThan(0);
      expect(northernTaijiOverlap.length).toBeGreaterThan(0);
    });

    it('should have valid grade distributions across all styles', () => {
      const allMovements = [
        ...movements,
        ...southernMovements,
        ...taijiMovements
      ];
      
      const grades = allMovements.map(m => m.grade).filter(g => g !== '-');
      const uniqueGrades = [...new Set(grades)];
      
      expect(uniqueGrades).toContain('A');
      expect(uniqueGrades).toContain('B');
      expect(uniqueGrades).toContain('C');
    });

    it('should have valid point distributions across all styles', () => {
      const allMovements = [
        ...movements,
        ...southernMovements,
        ...taijiMovements
      ];
      
      const points = allMovements.map(m => m.points).filter(p => p > 0);
      const uniquePoints = [...new Set(points)];
      
      expect(uniquePoints).toContain(0.2); // A grade
      expect(uniquePoints).toContain(0.3); // B grade
      expect(uniquePoints).toContain(0.4); // C grade
    });
  });
});