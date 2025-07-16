import { describe, it, expect } from 'vitest';
import { taijijianRequirements } from '../data/requirements/taijijian-requirements.js';
import { taijiquanRequirements } from '../data/requirements/taijiquan-requirements.js';
import { weaponRegistry, getAvailableWeapons, getWeaponRequirements, mapCategoryToJudgingCriteria } from '../data/weapon-registry.js';

describe('Taijijian Category', () => {
  
  describe('Structure and Requirements', () => {
    it('should have the correct structure', () => {
      expect(taijijianRequirements).toBeDefined();
      expect(taijijianRequirements.sword_techniques).toBeDefined();
      expect(taijijianRequirements.stances).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(taijijianRequirements.sword_techniques.required_count).toBe(8);
      expect(taijijianRequirements.stances.required_count).toBe(3);
    });

    it('should have 8 sword techniques', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      expect(techniques).toHaveLength(8);
      
      const expectedTechniques = [
        '刺剑', '左右挂剑', '撩剑', '点剑', '劈剑', '截剑', '抹剑', '绞剑'
      ];
      
      techniques.forEach((technique, index) => {
        expect(technique.chinese).toBe(expectedTechniques[index]);
        expect(technique.pinyin).toBeDefined();
        expect(technique.english).toBeDefined();
        expect(technique.description).toBeDefined();
      });
    });

    it('should have shared stances with taijiquan', () => {
      expect(taijijianRequirements.stances).toBe(taijiquanRequirements.stances);
      expect(taijijianRequirements.stances.movements).toHaveLength(3);
    });

    it('should not have leg techniques', () => {
      expect(taijijianRequirements.leg_techniques).toBeUndefined();
    });
  });

  describe('Sword Techniques Details', () => {
    it('should have properly structured sword techniques', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      
      const expectedTechniques = [
        { chinese: '刺剑', pinyin: 'Cì Jiàn', english: 'Straight Sword Thrust' },
        { chinese: '左右挂剑', pinyin: 'Zuǒ Yòu Guà Jiàn', english: 'Straight Sword Hooking Parry to the Left and Right' },
        { chinese: '撩剑', pinyin: 'Liāo Jiàn', english: 'Straight Sword Uppercut' },
        { chinese: '点剑', pinyin: 'Diǎn Jiàn', english: 'Straight Sword Pointing' },
        { chinese: '劈剑', pinyin: 'Pī Jiàn', english: 'Straight Sword Chop' },
        { chinese: '截剑', pinyin: 'Jié Jiàn', english: 'Straight Sword Intercept' },
        { chinese: '抹剑', pinyin: 'Mǒ Jiàn', english: 'Straight Sword Slicing' },
        { chinese: '绞剑', pinyin: 'Jiǎo Jiàn', english: 'Straight Sword Enveloping' }
      ];
      
      techniques.forEach((technique, index) => {
        const expected = expectedTechniques[index];
        expect(technique.chinese).toBe(expected.chinese);
        expect(technique.pinyin).toBe(expected.pinyin);
        expect(technique.english).toBe(expected.english);
        expect(technique.description).toBeDefined();
        expect(technique.description.length).toBeGreaterThan(20);
      });
    });

    it('should have detailed descriptions for each sword technique', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      
      // Check specific technique descriptions
      const thrust = techniques.find(t => t.chinese === '刺剑');
      expect(thrust.description).toContain('thrust out forwards straight');
      expect(thrust.description).toContain('tip of the blade');
      
      const parry = techniques.find(t => t.chinese === '左右挂剑');
      expect(parry.description).toContain('travels downwards');
      expect(parry.description).toContain('upper portion of the blade');
      
      const uppercut = techniques.find(t => t.chinese === '撩剑');
      expect(uppercut.description).toContain('upwards from below');
      expect(uppercut.description).toContain('uppercutting arc');
      
      const chop = techniques.find(t => t.chinese === '劈剑');
      expect(chop.description).toContain('chops downwards');
      expect(chop.description).toContain('edge of the blade');
    });

    it('should have no subcategories in sword techniques', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      
      techniques.forEach(technique => {
        expect(technique.subcategories).toBeUndefined();
      });
    });
  });

  describe('Weapon Registry Integration', () => {
    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.taijijian).toBeDefined();
      expect(weaponRegistry.taijijian.name).toBe('Taijijian');
      expect(weaponRegistry.taijijian.requirements).toBe(taijijianRequirements);
    });

    it('should have proper category mappings', () => {
      const categoryMap = weaponRegistry.taijijian.judgingCategoryMap;
      expect(categoryMap.sword_techniques).toBe('weapon_techniques');
      expect(categoryMap.stances).toBe('stances');
    });

    it('should have proper special handling flags', () => {
      expect(weaponRegistry.taijijian.specialHandling.hasLegSubcategories).toBe(false);
    });

    it('should be available in getAvailableWeapons', () => {
      const availableWeapons = getAvailableWeapons();
      const taijijian = availableWeapons.find(weapon => weapon.id === 'taijijian');
      
      expect(taijijian).toBeDefined();
      expect(taijijian.name).toBe('Taijijian');
    });

    it('should retrieve requirements correctly', () => {
      expect(getWeaponRequirements('taijijian')).toBe(taijijianRequirements);
    });

    it('should map categories to judging criteria correctly', () => {
      expect(mapCategoryToJudgingCriteria('taijijian', 'sword_techniques')).toBe('weapon_techniques');
      expect(mapCategoryToJudgingCriteria('taijijian', 'stances')).toBe('stances');
    });
  });

  describe('Relationship with Taijiquan', () => {
    it('should share stances with taijiquan', () => {
      expect(taijijianRequirements.stances).toBe(taijiquanRequirements.stances);
      
      // Should have the same 3 stances
      const stanceNames = taijijianRequirements.stances.movements.map(s => s.chinese);
      expect(stanceNames).toContain('弓步'); // Bow Stance
      expect(stanceNames).toContain('仆步'); // Crouching Stance
      expect(stanceNames).toContain('虚步'); // Empty Stance
    });

    it('should have different technique categories than taijiquan', () => {
      // Taijijian has sword techniques, taijiquan has general techniques
      expect(taijijianRequirements.sword_techniques).toBeDefined();
      expect(taijijianRequirements.techniques).toBeUndefined();
      
      expect(taijiquanRequirements.techniques).toBeDefined();
      expect(taijiquanRequirements.sword_techniques).toBeUndefined();
    });

    it('should not have leg techniques like taijiquan', () => {
      expect(taijijianRequirements.leg_techniques).toBeUndefined();
      expect(taijiquanRequirements.leg_techniques).toBeDefined();
    });
  });

  describe('Data Integrity', () => {
    it('should have valid movement data structure', () => {
      // Test sword techniques
      expect(taijijianRequirements.sword_techniques.movements).toBeDefined();
      expect(Array.isArray(taijijianRequirements.sword_techniques.movements)).toBe(true);
      
      taijijianRequirements.sword_techniques.movements.forEach(movement => {
        expect(movement.chinese).toBeDefined();
        expect(movement.pinyin).toBeDefined();
        expect(movement.english).toBeDefined();
        expect(movement.description).toBeDefined();
        
        // Ensure strings are not empty
        expect(movement.chinese.trim()).not.toBe('');
        expect(movement.pinyin.trim()).not.toBe('');
        expect(movement.english.trim()).not.toBe('');
        expect(movement.description.trim()).not.toBe('');
      });
      
      // Test stances (shared with taijiquan)
      expect(taijijianRequirements.stances.movements).toBeDefined();
      expect(Array.isArray(taijijianRequirements.stances.movements)).toBe(true);
      
      taijijianRequirements.stances.movements.forEach(stance => {
        expect(stance.chinese).toBeDefined();
        expect(stance.pinyin).toBeDefined();
        expect(stance.english).toBeDefined();
        expect(stance.description).toBeDefined();
      });
    });

    it('should have unique technique names', () => {
      const chineseNames = taijijianRequirements.sword_techniques.movements.map(t => t.chinese);
      const englishNames = taijijianRequirements.sword_techniques.movements.map(t => t.english);
      const pinyinNames = taijijianRequirements.sword_techniques.movements.map(t => t.pinyin);
      
      expect(chineseNames.length).toBe(new Set(chineseNames).size);
      expect(englishNames.length).toBe(new Set(englishNames).size);
      expect(pinyinNames.length).toBe(new Set(pinyinNames).size);
    });

    it('should have meaningful descriptions', () => {
      taijijianRequirements.sword_techniques.movements.forEach(technique => {
        expect(technique.description.length).toBeGreaterThan(20);
        expect(technique.description.toLowerCase()).not.toContain('todo');
        expect(technique.description.toLowerCase()).not.toContain('placeholder');
      });
    });

    it('should have proper required count values', () => {
      expect(taijijianRequirements.sword_techniques.required_count).toBeGreaterThan(0);
      expect(taijijianRequirements.stances.required_count).toBeGreaterThan(0);
      
      // Should match the actual number of movements
      expect(taijijianRequirements.sword_techniques.required_count).toBe(taijijianRequirements.sword_techniques.movements.length);
      expect(taijijianRequirements.stances.required_count).toBe(taijijianRequirements.stances.movements.length);
    });

    it('should not have balance techniques', () => {
      expect(taijijianRequirements.balance_techniques).toBeUndefined();
    });
  });

  describe('Unique Characteristics', () => {
    it('should be distinct from other martial arts categories', () => {
      // Should not have northern-style categories
      expect(taijijianRequirements.hand_forms).toBeUndefined();
      expect(taijijianRequirements.fist_techniques).toBeUndefined();
      expect(taijijianRequirements.palm_techniques).toBeUndefined();
      expect(taijijianRequirements.elbow_techniques).toBeUndefined();
      expect(taijijianRequirements.jumping_techniques).toBeUndefined();
      
      // Should not have southern-style categories
      expect(taijijianRequirements.hand_shapes).toBeUndefined();
      expect(taijijianRequirements.bridge_techniques).toBeUndefined();
      expect(taijijianRequirements.footwork_techniques).toBeUndefined();
      expect(taijijianRequirements.broadsword_techniques).toBeUndefined();
      expect(taijijianRequirements.cudgel_techniques).toBeUndefined();
      
      // Should not have general taijiquan techniques
      expect(taijijianRequirements.techniques).toBeUndefined();
      
      // Should have its own unique sword techniques
      expect(taijijianRequirements.sword_techniques).toBeDefined();
    });

    it('should have taiji-style sword techniques', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      
      // Should have classic taiji sword techniques
      const techniqueNames = techniques.map(t => t.chinese);
      expect(techniqueNames).toContain('刺剑'); // Thrust
      expect(techniqueNames).toContain('劈剑'); // Chop
      expect(techniqueNames).toContain('撩剑'); // Uppercut
      expect(techniqueNames).toContain('点剑'); // Pointing
      expect(techniqueNames).toContain('抹剑'); // Slicing
      expect(techniqueNames).toContain('绞剑'); // Enveloping
    });

    it('should have minimal requirements compared to other categories', () => {
      // Only 2 categories vs many others having 6+ categories
      const categoryCount = Object.keys(taijijianRequirements).length;
      expect(categoryCount).toBe(2); // sword_techniques and stances
    });
  });

  describe('Weapon Technique Focus', () => {
    it('should be primarily weapon-focused', () => {
      // Most requirements should be weapon techniques
      const totalRequirements = taijijianRequirements.sword_techniques.required_count + 
                               taijijianRequirements.stances.required_count;
      const weaponRequirements = taijijianRequirements.sword_techniques.required_count;
      
      expect(weaponRequirements).toBe(8);
      expect(totalRequirements).toBe(11); // 8 sword + 3 stances
      expect(weaponRequirements / totalRequirements).toBeGreaterThan(0.7); // Over 70% weapon techniques
    });

    it('should have detailed weapon technique descriptions', () => {
      const techniques = taijijianRequirements.sword_techniques.movements;
      
      // Check that descriptions mention weapon-specific details
      techniques.forEach(technique => {
        expect(technique.description).toMatch(/sword|blade|tip|edge/i);
      });
    });
  });
});