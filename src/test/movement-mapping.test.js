import { describe, it, expect } from 'vitest'
import { changquanRequirements } from '../data/requirements/changquan-requirements.js'
import { judgingCriteria } from '../data/judging-criteria.js'

// Test the core mapping logic without UI rendering
describe('Movement Mapping Logic', () => {
  
  // Helper function that mimics the mapping logic from Deductions.jsx
  const getMovementData = (category, index) => {
    let movementData = null;
    let actualCategory = category;
    
    // Handle special case for leg techniques which have nested categories
    const legCategory = changquanRequirements.leg_techniques?.categories?.find(cat => cat.type === category);
    if (legCategory) {
      if (legCategory.movements[index]) {
        movementData = legCategory.movements[index];
        actualCategory = 'leg_techniques';
      }
    } else if (changquanRequirements[category]?.movements[index]) {
      movementData = changquanRequirements[category].movements[index];
    }
    
    return { movementData, actualCategory };
  };

  const findMatchingCriteria = (movementData, criteriaCategory) => {
    if (!criteriaCategory || !judgingCriteria[criteriaCategory] || !movementData) {
      return null;
    }
    
    for (const techniqueKey of Object.keys(judgingCriteria[criteriaCategory])) {
      const technique = judgingCriteria[criteriaCategory][techniqueKey];
      
      if (technique.chinese === movementData.chinese || 
          technique.english === movementData.english ||
          technique.pinyin === movementData.pinyin) {
        return technique;
      }
    }
    return null;
  };

  describe('Hand Forms Mapping', () => {
    it('should map all hand forms to judging criteria', () => {
      changquanRequirements.hand_forms.movements.forEach((movement, index) => {
        const { movementData, actualCategory } = getMovementData('hand_forms', index);
        
        expect(movementData).toBeTruthy();
        expect(movementData.chinese).toBe(movement.chinese);
        expect(actualCategory).toBe('hand_forms');
        
        const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
        expect(matchingCriteria).toBeTruthy();
        expect(matchingCriteria.deductions).toBeDefined();
      });
    });
  });

  describe('Stances Mapping', () => {
    it('should map all stances to judging criteria', () => {
      changquanRequirements.stances.movements.forEach((movement, index) => {
        const { movementData, actualCategory } = getMovementData('stances', index);
        
        expect(movementData).toBeTruthy();
        expect(movementData.chinese).toBe(movement.chinese);
        expect(actualCategory).toBe('stances');
        
        const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
        expect(matchingCriteria).toBeTruthy();
      });
    });
  });

  describe('Balance Techniques Mapping', () => {
    it('should properly map balance techniques to judging criteria', () => {
      // These balance techniques should have matching criteria
      const techniquesWithCriteria = [1, 3, 4, 5, 6, 7]; // Based on debug output
      
      techniquesWithCriteria.forEach(index => {
        const { movementData, actualCategory } = getMovementData('balance_techniques', index);
        
        expect(movementData).toBeTruthy();
        expect(actualCategory).toBe('balance_techniques');
        
        const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
        expect(matchingCriteria).toBeTruthy();
      });
    });

    it('should identify balance techniques without specific criteria', () => {
      // These balance techniques should NOT have matching criteria  
      const techniquesWithoutCriteria = [0, 2, 8]; // Based on debug output
      
      techniquesWithoutCriteria.forEach(index => {
        const { movementData, actualCategory } = getMovementData('balance_techniques', index);
        
        expect(movementData).toBeTruthy();
        expect(actualCategory).toBe('balance_techniques');
        
        const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
        expect(matchingCriteria).toBeNull();
      });
    });
  });

  describe('Leg Techniques Mapping', () => {
    it('should map leg techniques with criteria correctly', () => {
      // Test specific movements that should have criteria
      const movementsWithCriteria = [
        { category: 'straight_leg_swinging', indices: [0, 2] }, // Front kick, side kick
        { category: 'flexion_extension', indices: [0, 1, 2] }, // All flexion extension
        { category: 'sweep_turn', indices: [0, 1] } // Front and back sweep
      ];
      
      movementsWithCriteria.forEach(({ category, indices }) => {
        indices.forEach(index => {
          const { movementData, actualCategory } = getMovementData(category, index);
          
          expect(movementData).toBeTruthy();
          expect(actualCategory).toBe('leg_techniques');
          
          const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
          expect(matchingCriteria).toBeTruthy();
        });
      });
    });

    it('should identify leg techniques without specific criteria', () => {
      // Test movements that should NOT have criteria  
      const movementsWithoutCriteria = [
        { category: 'straight_leg_swinging', indices: [1, 3, 4, 5] } // Oblique, crescent kicks, etc.
      ];
      
      movementsWithoutCriteria.forEach(({ category, indices }) => {
        indices.forEach(index => {
          const { movementData, actualCategory } = getMovementData(category, index);
          
          expect(movementData).toBeTruthy();
          expect(actualCategory).toBe('leg_techniques');
          
          const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
          expect(matchingCriteria).toBeNull();
        });
      });
    });

    it('should handle all leg technique category types', () => {
      const expectedCategories = ['straight_leg_swinging', 'flexion_extension', 'sweep_turn'];
      const actualCategories = changquanRequirements.leg_techniques.categories.map(cat => cat.type);
      
      expectedCategories.forEach(expectedCategory => {
        expect(actualCategories).toContain(expectedCategory);
      });
    });
  });

  describe('Elbow Techniques Mapping', () => {
    it('should detect elbow techniques have no judging criteria', () => {
      changquanRequirements.elbow_techniques.movements.forEach((movement, index) => {
        const { movementData, actualCategory } = getMovementData('elbow_techniques', index);
        
        expect(movementData).toBeTruthy();
        expect(movementData.chinese).toBe(movement.chinese);
        expect(actualCategory).toBe('elbow_techniques');
        
        // Elbow techniques should NOT have matching criteria (that's why they show "No Specific Deductions")
        const matchingCriteria = findMatchingCriteria(movementData, actualCategory);
        expect(matchingCriteria).toBeNull();
      });
    });
  });

  describe('Categories Coverage', () => {
    it('should cover all major movement categories', () => {
      const requiredCategories = [
        'hand_forms',
        'fist_techniques', 
        'palm_techniques',
        'elbow_techniques',
        'stances',
        'leg_techniques',
        'balance_techniques'
      ];

      const availableCategories = Object.keys(changquanRequirements);
      
      requiredCategories.forEach(category => {
        expect(availableCategories).toContain(category);
      });
    });

    it('should have judging criteria for major categories', () => {
      const categoriesWithCriteria = [
        'hand_forms',
        'stances', 
        'balance_techniques',
        'leg_techniques'
      ];

      categoriesWithCriteria.forEach(category => {
        expect(judgingCriteria[category]).toBeDefined();
        expect(Object.keys(judgingCriteria[category]).length).toBeGreaterThan(0);
      });
    });

    it('should identify categories without judging criteria', () => {
      const categoriesWithoutCriteria = ['elbow_techniques'];
      
      categoriesWithoutCriteria.forEach(category => {
        expect(judgingCriteria[category]).toBeUndefined();
      });
    });
  });

  describe('Data Integrity', () => {
    it('should have valid movement data structure', () => {
      Object.entries(changquanRequirements).forEach(([categoryKey, categoryData]) => {
        if (categoryKey === 'leg_techniques') {
          // Special handling for nested leg techniques
          expect(categoryData.categories).toBeDefined();
          expect(Array.isArray(categoryData.categories)).toBe(true);
          
          categoryData.categories.forEach(subCategory => {
            expect(subCategory.type).toBeDefined();
            expect(subCategory.movements).toBeDefined();
            expect(Array.isArray(subCategory.movements)).toBe(true);
            
            subCategory.movements.forEach(movement => {
              expect(movement.chinese).toBeDefined();
              expect(movement.pinyin).toBeDefined();
              expect(movement.english).toBeDefined();
            });
          });
        } else {
          // Standard category structure
          expect(categoryData.movements).toBeDefined();
          expect(Array.isArray(categoryData.movements)).toBe(true);
          
          categoryData.movements.forEach(movement => {
            expect(movement.chinese).toBeDefined();
            expect(movement.pinyin).toBeDefined();
            expect(movement.english).toBeDefined();
          });
        }
      });
    });

    it('should have valid judging criteria structure', () => {
      const skipCategories = ['general_rules', 'connection_criteria', 'execution_standards'];
      
      Object.entries(judgingCriteria).forEach(([categoryKey, categoryData]) => {
        if (categoryKey === 'general_rules') {
          expect(categoryData.deduction_amount).toBeDefined();
          expect(categoryData.description).toBeDefined();
        } else if (!skipCategories.includes(categoryKey)) {
          Object.entries(categoryData).forEach(([techniqueKey, technique]) => {
            expect(technique.chinese).toBeDefined();
            expect(technique.english).toBeDefined();
            expect(technique.code).toBeDefined();
            
            if (technique.deductions) {
              expect(Array.isArray(technique.deductions)).toBe(true);
            }
            if (technique.non_conformity) {
              expect(Array.isArray(technique.non_conformity)).toBe(true);
            }
          });
        }
      });
    });
  });
});