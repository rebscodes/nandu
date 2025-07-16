import { describe, it, expect } from 'vitest';
import { taijiquanRequirements } from '../data/requirements/taijiquan-requirements.js';
import { weaponRegistry, getAvailableWeapons, getWeaponRequirements, mapCategoryToJudgingCriteria } from '../data/weapon-registry.js';

describe('Taijiquan Category', () => {
  
  describe('Structure and Requirements', () => {
    it('should have the correct structure', () => {
      expect(taijiquanRequirements).toBeDefined();
      expect(taijiquanRequirements.techniques).toBeDefined();
      expect(taijiquanRequirements.stances).toBeDefined();
      expect(taijiquanRequirements.leg_techniques).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(taijiquanRequirements.techniques.required_count).toBe(8);
      expect(taijiquanRequirements.stances.required_count).toBe(3);
      expect(taijiquanRequirements.leg_techniques.required_count).toBe(2);
    });

    it('should have 8 techniques', () => {
      const techniques = taijiquanRequirements.techniques.movements;
      expect(techniques).toHaveLength(8);
      
      const expectedTechniques = [
        '揽雀尾', '左右野马分鬃', '左右搂膝拗步', '云手', 
        '左右穿梭', '掩手肱捶', '左右倒卷肱', '搬拦捶'
      ];
      
      techniques.forEach((technique, index) => {
        expect(technique.chinese).toBe(expectedTechniques[index]);
        expect(technique.pinyin).toBeDefined();
        expect(technique.english).toBeDefined();
        expect(technique.description).toBeDefined();
      });
    });

    it('should have 3 stances', () => {
      const stances = taijiquanRequirements.stances.movements;
      expect(stances).toHaveLength(3);
      
      const expectedStances = ['弓步', '仆步', '虚步'];
      
      stances.forEach((stance, index) => {
        expect(stance.chinese).toBe(expectedStances[index]);
        expect(stance.pinyin).toBeDefined();
        expect(stance.english).toBeDefined();
        expect(stance.description).toBeDefined();
      });
    });

    it('should have leg techniques requirement with explanatory movement', () => {
      const legTechniques = taijiquanRequirements.leg_techniques;
      expect(legTechniques.required_count).toBe(2);
      expect(legTechniques.movements).toBeDefined();
      expect(legTechniques.movements).toHaveLength(1);
      
      const requirement = legTechniques.movements[0];
      expect(requirement.chinese).toBe('腿法要求');
      expect(requirement.pinyin).toBe('Tuǐ Fǎ Yāo Qiú');
      expect(requirement.english).toBe('Leg Technique Requirements');
      expect(requirement.description).toContain('Two different leg techniques are required');
      expect(requirement.description).toContain('not detailed in IWUF rules');
    });
  });

  describe('Grasp the Peacock\'s Tail Subcategories', () => {
    it('should have the complete four-part technique', () => {
      const graspPeacockTail = taijiquanRequirements.techniques.movements.find(
        technique => technique.chinese === '揽雀尾'
      );
      
      expect(graspPeacockTail).toBeDefined();
      expect(graspPeacockTail.subcategories).toBeDefined();
      expect(graspPeacockTail.subcategories).toHaveLength(4);
      
      const expectedSubcategories = [
        { chinese: '掤', pinyin: 'Péng', english: 'Ward Off' },
        { chinese: '捋', pinyin: 'Lǚ', english: 'Roll Back' },
        { chinese: '挤', pinyin: 'Jǐ', english: 'Press' },
        { chinese: '按', pinyin: 'Àn', english: 'Push' }
      ];
      
      graspPeacockTail.subcategories.forEach((subcategory, index) => {
        const expected = expectedSubcategories[index];
        expect(subcategory.chinese).toBe(expected.chinese);
        expect(subcategory.pinyin).toBe(expected.pinyin);
        expect(subcategory.english).toBe(expected.english);
        expect(subcategory.description).toBeDefined();
        expect(subcategory.description.length).toBeGreaterThan(20);
      });
    });

    it('should have detailed descriptions for each subcategory', () => {
      const graspPeacockTail = taijiquanRequirements.techniques.movements[0];
      
      // Ward Off
      const wardOff = graspPeacockTail.subcategories[0];
      expect(wardOff.description).toContain('bracing outwards');
      expect(wardOff.description).toContain('mouth height');
      
      // Roll Back
      const rollBack = graspPeacockTail.subcategories[1];
      expect(rollBack.description).toContain('palm facing downwards');
      expect(rollBack.description).toContain('waist rotates');
      
      // Press
      const press = graspPeacockTail.subcategories[2];
      expect(press.description).toContain('back of the front hand');
      expect(press.description).toContain('pressed out forwards');
      
      // Push
      const push = graspPeacockTail.subcategories[3];
      expect(push.description).toContain('vertical circular plane');
      expect(push.description).toContain('forward and downward');
    });
  });

  describe('Weapon Registry Integration', () => {
    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.taijiquan).toBeDefined();
      expect(weaponRegistry.taijiquan.name).toBe('Taijiquan');
      expect(weaponRegistry.taijiquan.requirements).toBe(taijiquanRequirements);
    });

    it('should have proper category mappings', () => {
      const categoryMap = weaponRegistry.taijiquan.judgingCategoryMap;
      expect(categoryMap.techniques).toBe('techniques');
      expect(categoryMap.stances).toBe('stances');
      expect(categoryMap.leg_techniques).toBe('leg_techniques');
    });

    it('should have proper special handling flags', () => {
      expect(weaponRegistry.taijiquan.specialHandling.hasLegSubcategories).toBe(false);
    });

    it('should be available in getAvailableWeapons', () => {
      const availableWeapons = getAvailableWeapons();
      const taijiquan = availableWeapons.find(weapon => weapon.id === 'taijiquan');
      
      expect(taijiquan).toBeDefined();
      expect(taijiquan.name).toBe('Taijiquan');
    });

    it('should retrieve requirements correctly', () => {
      expect(getWeaponRequirements('taijiquan')).toBe(taijiquanRequirements);
    });

    it('should map categories to judging criteria correctly', () => {
      expect(mapCategoryToJudgingCriteria('taijiquan', 'techniques')).toBe('techniques');
      expect(mapCategoryToJudgingCriteria('taijiquan', 'stances')).toBe('stances');
      expect(mapCategoryToJudgingCriteria('taijiquan', 'leg_techniques')).toBe('leg_techniques');
    });
  });

  describe('Data Integrity', () => {
    it('should have valid movement data structure', () => {
      // Test techniques
      expect(taijiquanRequirements.techniques.movements).toBeDefined();
      expect(Array.isArray(taijiquanRequirements.techniques.movements)).toBe(true);
      
      taijiquanRequirements.techniques.movements.forEach(movement => {
        expect(movement.chinese).toBeDefined();
        expect(movement.pinyin).toBeDefined();
        expect(movement.english).toBeDefined();
        expect(movement.description).toBeDefined();
        
        // Check subcategories if they exist
        if (movement.subcategories) {
          expect(Array.isArray(movement.subcategories)).toBe(true);
          movement.subcategories.forEach(sub => {
            expect(sub.chinese).toBeDefined();
            expect(sub.pinyin).toBeDefined();
            expect(sub.english).toBeDefined();
            expect(sub.description).toBeDefined();
          });
        }
      });
      
      // Test stances
      expect(taijiquanRequirements.stances.movements).toBeDefined();
      expect(Array.isArray(taijiquanRequirements.stances.movements)).toBe(true);
      
      taijiquanRequirements.stances.movements.forEach(stance => {
        expect(stance.chinese).toBeDefined();
        expect(stance.pinyin).toBeDefined();
        expect(stance.english).toBeDefined();
        expect(stance.description).toBeDefined();
      });
    });

    it('should have only one technique with subcategories', () => {
      const techniquesWithSubcategories = taijiquanRequirements.techniques.movements.filter(
        technique => technique.subcategories && technique.subcategories.length > 0
      );
      
      expect(techniquesWithSubcategories).toHaveLength(1);
      expect(techniquesWithSubcategories[0].chinese).toBe('揽雀尾');
    });

    it('should have unique technique names', () => {
      const chineseNames = taijiquanRequirements.techniques.movements.map(t => t.chinese);
      const englishNames = taijiquanRequirements.techniques.movements.map(t => t.english);
      const pinyinNames = taijiquanRequirements.techniques.movements.map(t => t.pinyin);
      
      expect(chineseNames.length).toBe(new Set(chineseNames).size);
      expect(englishNames.length).toBe(new Set(englishNames).size);
      expect(pinyinNames.length).toBe(new Set(pinyinNames).size);
    });

    it('should have unique stance names', () => {
      const chineseNames = taijiquanRequirements.stances.movements.map(s => s.chinese);
      const englishNames = taijiquanRequirements.stances.movements.map(s => s.english);
      const pinyinNames = taijiquanRequirements.stances.movements.map(s => s.pinyin);
      
      expect(chineseNames.length).toBe(new Set(chineseNames).size);
      expect(englishNames.length).toBe(new Set(englishNames).size);
      expect(pinyinNames.length).toBe(new Set(pinyinNames).size);
    });

    it('should have meaningful descriptions', () => {
      // Check technique descriptions
      taijiquanRequirements.techniques.movements.forEach(technique => {
        expect(technique.description.length).toBeGreaterThan(20);
        expect(technique.description.toLowerCase()).not.toContain('todo');
        expect(technique.description.toLowerCase()).not.toContain('placeholder');
      });
      
      // Check stance descriptions
      taijiquanRequirements.stances.movements.forEach(stance => {
        expect(stance.description.length).toBeGreaterThan(20);
        expect(stance.description.toLowerCase()).not.toContain('todo');
        expect(stance.description.toLowerCase()).not.toContain('placeholder');
      });
    });

    it('should not have balance techniques', () => {
      expect(taijiquanRequirements.balance_techniques).toBeUndefined();
    });

    it('should have proper required count values', () => {
      expect(taijiquanRequirements.techniques.required_count).toBeGreaterThan(0);
      expect(taijiquanRequirements.stances.required_count).toBeGreaterThan(0);
      expect(taijiquanRequirements.leg_techniques.required_count).toBeGreaterThan(0);
      
      // Should match the actual number of movements for techniques and stances
      expect(taijiquanRequirements.techniques.required_count).toBe(taijiquanRequirements.techniques.movements.length);
      expect(taijiquanRequirements.stances.required_count).toBe(taijiquanRequirements.stances.movements.length);
    });
  });

  describe('Unique Characteristics', () => {
    it('should be distinct from other martial arts categories', () => {
      // Taijiquan should not have the same structure as southern categories
      expect(taijiquanRequirements.hand_shapes).toBeUndefined();
      expect(taijiquanRequirements.fist_techniques).toBeUndefined();
      expect(taijiquanRequirements.bridge_techniques).toBeUndefined();
      expect(taijiquanRequirements.footwork_techniques).toBeUndefined();
      expect(taijiquanRequirements.broadsword_techniques).toBeUndefined();
      expect(taijiquanRequirements.cudgel_techniques).toBeUndefined();
      
      // Should not have northern-style categories
      expect(taijiquanRequirements.hand_forms).toBeUndefined();
      expect(taijiquanRequirements.palm_techniques).toBeUndefined();
      expect(taijiquanRequirements.elbow_techniques).toBeUndefined();
      expect(taijiquanRequirements.jumping_techniques).toBeUndefined();
      
      // Should have its own unique "techniques" category
      expect(taijiquanRequirements.techniques).toBeDefined();
    });

    it('should have specific taijiquan stance requirements', () => {
      // Only 3 stances (unlike southern categories with 6)
      expect(taijiquanRequirements.stances.movements).toHaveLength(3);
      
      // Should include traditional taijiquan stances
      const stanceNames = taijiquanRequirements.stances.movements.map(s => s.chinese);
      expect(stanceNames).toContain('弓步'); // Bow Stance
      expect(stanceNames).toContain('仆步'); // Crouching Stance
      expect(stanceNames).toContain('虚步'); // Empty Stance
    });

    it('should have generic leg technique requirements', () => {
      // Unlike other categories, leg techniques use an explanatory movement
      expect(taijiquanRequirements.leg_techniques.movements).toBeDefined();
      expect(taijiquanRequirements.leg_techniques.movements).toHaveLength(1);
      
      const requirement = taijiquanRequirements.leg_techniques.movements[0];
      expect(requirement.english).toBe('Leg Technique Requirements');
      expect(requirement.description).toContain('not detailed in IWUF rules');
    });
  });

  describe('Subcategory Rendering Support', () => {
    it('should support enhanced UI rendering for Grasp the Peacock\'s Tail', () => {
      const graspPeacockTail = taijiquanRequirements.techniques.movements[0];
      
      // Should be detectable by rendering logic
      expect(graspPeacockTail.subcategories).toBeDefined();
      expect(Array.isArray(graspPeacockTail.subcategories)).toBe(true);
      
      // Should have proper structure for rendering
      graspPeacockTail.subcategories.forEach((subcategory, index) => {
        expect(subcategory.chinese).toBeDefined();
        expect(subcategory.pinyin).toBeDefined();
        expect(subcategory.english).toBeDefined();
        expect(subcategory.description).toBeDefined();
        expect(typeof index).toBe('number');
      });
    });

    it('should differentiate between techniques with and without subcategories', () => {
      const techniquesWithSubcategories = taijiquanRequirements.techniques.movements.filter(
        technique => technique.subcategories && technique.subcategories.length > 0
      );
      
      const techniquesWithoutSubcategories = taijiquanRequirements.techniques.movements.filter(
        technique => !technique.subcategories || technique.subcategories.length === 0
      );
      
      expect(techniquesWithSubcategories).toHaveLength(1);
      expect(techniquesWithoutSubcategories).toHaveLength(7);
    });
  });
});