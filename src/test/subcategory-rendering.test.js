import { describe, it, expect } from 'vitest';
import { nanquanRequirements } from '../data/requirements/nanquan-requirements.js';

describe('Subcategory Rendering Support', () => {
  
  describe('Movement-level Subcategories', () => {
    it('should have proper structure for Hanging & Covering/Capping Fist', () => {
      const hangingCoveringFist = nanquanRequirements.fist_techniques.movements.find(
        movement => movement.chinese === '挂盖拳'
      );
      
      expect(hangingCoveringFist).toBeDefined();
      expect(hangingCoveringFist.subcategories).toBeDefined();
      expect(Array.isArray(hangingCoveringFist.subcategories)).toBe(true);
      expect(hangingCoveringFist.subcategories).toHaveLength(2);
      
      // Check first subcategory (Hanging Fist)
      const hangingFist = hangingCoveringFist.subcategories[0];
      expect(hangingFist.chinese).toBe('挂拳');
      expect(hangingFist.pinyin).toBe('Guà Quán');
      expect(hangingFist.english).toBe('Hanging Fist');
      expect(hangingFist.description).toContain('rapidly swung from up to down');
      
      // Check second subcategory (Covering Fist)
      const coveringFist = hangingCoveringFist.subcategories[1];
      expect(coveringFist.chinese).toBe('盖拳');
      expect(coveringFist.pinyin).toBe('Gài Quán');
      expect(coveringFist.english).toBe('Covering Fist');
      expect(coveringFist.description).toContain('swung downward and inwards');
    });

    it('should have proper structure for Butterfly Stance', () => {
      const butterflyStance = nanquanRequirements.stances.movements.find(
        movement => movement.chinese === '蝶步'
      );
      
      expect(butterflyStance).toBeDefined();
      expect(butterflyStance.subcategories).toBeDefined();
      expect(Array.isArray(butterflyStance.subcategories)).toBe(true);
      expect(butterflyStance.subcategories).toHaveLength(2);
      
      // Check first subcategory (Single Butterfly Stance)
      const singleButterfly = butterflyStance.subcategories[0];
      expect(singleButterfly.chinese).toBe('单蝶步');
      expect(singleButterfly.pinyin).toBe('Dān Dié Bù');
      expect(singleButterfly.english).toBe('Single Butterfly Stance');
      expect(singleButterfly.description).toContain('fully squatted');
      
      // Check second subcategory (Double Butterfly Stance)
      const doubleButterfly = butterflyStance.subcategories[1];
      expect(doubleButterfly.chinese).toBe('双蝶步');
      expect(doubleButterfly.pinyin).toBe('Shuāng Dié Bù');
      expect(doubleButterfly.english).toBe('Double Butterfly Stance');
      expect(doubleButterfly.description).toContain('knees are drawn in');
    });

    it('should have consistent subcategory structure', () => {
      // Find all movements with subcategories
      const allMovements = [];
      Object.values(nanquanRequirements).forEach(category => {
        if (category.movements) {
          allMovements.push(...category.movements);
        }
      });

      const movementsWithSubcategories = allMovements.filter(
        movement => movement.subcategories && movement.subcategories.length > 0
      );

      expect(movementsWithSubcategories).toHaveLength(2); // Should have exactly 2 movements with subcategories

      // Check that all subcategories have the required fields
      movementsWithSubcategories.forEach(movement => {
        expect(movement.subcategories).toBeDefined();
        expect(Array.isArray(movement.subcategories)).toBe(true);
        
        movement.subcategories.forEach(subcategory => {
          expect(subcategory.chinese).toBeDefined();
          expect(subcategory.pinyin).toBeDefined();
          expect(subcategory.english).toBeDefined();
          expect(subcategory.description).toBeDefined();
          
          // Ensure strings are not empty
          expect(subcategory.chinese.trim()).not.toBe('');
          expect(subcategory.pinyin.trim()).not.toBe('');
          expect(subcategory.english.trim()).not.toBe('');
          expect(subcategory.description.trim()).not.toBe('');
        });
      });
    });
  });

  describe('Rendering Logic Support', () => {
    it('should be compatible with enhanced Requirements.jsx rendering', () => {
      // Test that the data structure supports the enhanced rendering logic
      const fistTechniques = nanquanRequirements.fist_techniques.movements;
      
      // Find the technique with subcategories
      const techniqueWithSubs = fistTechniques.find(tech => tech.subcategories);
      expect(techniqueWithSubs).toBeDefined();
      
      // Verify the rendering can detect and iterate over subcategories
      expect(techniqueWithSubs.subcategories).toBeDefined();
      expect(Array.isArray(techniqueWithSubs.subcategories)).toBe(true);
      
      // Test the structure that the rendering logic expects
      techniqueWithSubs.subcategories.forEach((subcategory, index) => {
        // These properties should be available for rendering
        expect(subcategory.chinese).toBeDefined();
        expect(subcategory.pinyin).toBeDefined();
        expect(subcategory.english).toBeDefined();
        expect(subcategory.description).toBeDefined();
        
        // Test that the key generation would work (based on subIndex)
        expect(typeof index).toBe('number');
        expect(index).toBeGreaterThanOrEqual(0);
      });
    });

    it('should differentiate between movements with and without subcategories', () => {
      const allMovements = [];
      Object.values(nanquanRequirements).forEach(category => {
        if (category.movements) {
          allMovements.push(...category.movements);
        }
      });

      let movementsWithSubcategories = 0;
      let movementsWithoutSubcategories = 0;

      allMovements.forEach(movement => {
        if (movement.subcategories && movement.subcategories.length > 0) {
          movementsWithSubcategories++;
        } else {
          movementsWithoutSubcategories++;
        }
      });

      // Should have both types of movements
      expect(movementsWithSubcategories).toBeGreaterThan(0);
      expect(movementsWithoutSubcategories).toBeGreaterThan(0);
      
      // Should have exactly 2 movements with subcategories (挂盖拳 and 蝶步)
      expect(movementsWithSubcategories).toBe(2);
    });
  });

  describe('Data Validation', () => {
    it('should have unique subcategory names within each movement', () => {
      const allMovements = [];
      Object.values(nanquanRequirements).forEach(category => {
        if (category.movements) {
          allMovements.push(...category.movements);
        }
      });

      const movementsWithSubcategories = allMovements.filter(
        movement => movement.subcategories && movement.subcategories.length > 0
      );

      movementsWithSubcategories.forEach(movement => {
        const chineseNames = movement.subcategories.map(sub => sub.chinese);
        const englishNames = movement.subcategories.map(sub => sub.english);
        const pinyinNames = movement.subcategories.map(sub => sub.pinyin);

        // Check for uniqueness within each movement
        expect(chineseNames.length).toBe(new Set(chineseNames).size);
        expect(englishNames.length).toBe(new Set(englishNames).size);
        expect(pinyinNames.length).toBe(new Set(pinyinNames).size);
      });
    });

    it('should have meaningful descriptions for all subcategories', () => {
      const allMovements = [];
      Object.values(nanquanRequirements).forEach(category => {
        if (category.movements) {
          allMovements.push(...category.movements);
        }
      });

      const movementsWithSubcategories = allMovements.filter(
        movement => movement.subcategories && movement.subcategories.length > 0
      );

      movementsWithSubcategories.forEach(movement => {
        movement.subcategories.forEach(subcategory => {
          // Descriptions should be meaningful (longer than just a few characters)
          expect(subcategory.description.length).toBeGreaterThan(10);
          
          // Should not be placeholder text
          expect(subcategory.description.toLowerCase()).not.toContain('todo');
          expect(subcategory.description.toLowerCase()).not.toContain('placeholder');
        });
      });
    });
  });
});