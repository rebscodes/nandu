import { describe, it, expect } from 'vitest';
import { taijishanRequirements } from '../data/requirements/taijishan-requirements.js';
import { taijiquanRequirements } from '../data/requirements/taijiquan-requirements.js';
import { weaponRegistry, getAvailableWeapons, getWeaponRequirements, mapCategoryToJudgingCriteria } from '../data/weapon-registry.js';

describe('Taijishan Category', () => {
  
  describe('Structure and Requirements', () => {
    it('should have the correct structure', () => {
      expect(taijishanRequirements).toBeDefined();
      expect(taijishanRequirements.fan_techniques).toBeDefined();
      expect(taijishanRequirements.stances).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(taijishanRequirements.fan_techniques.required_count).toBe(8);
      expect(taijishanRequirements.stances.required_count).toBe(3);
    });

    it('should have 8 fan techniques', () => {
      const techniques = taijishanRequirements.fan_techniques.movements;
      expect(techniques).toHaveLength(8);
      
      const expectedTechniques = [
        '开扇', '合扇', '刺扇', '挂扇', '撩扇', '点扇', '劈扇', '抛接扇'
      ];
      
      techniques.forEach((technique, index) => {
        expect(technique.chinese).toBe(expectedTechniques[index]);
        expect(technique.pinyin).toBeDefined();
        expect(technique.english).toBeDefined();
        expect(technique.description).toBeDefined();
      });
    });

    it('should have shared stances with taijiquan', () => {
      expect(taijishanRequirements.stances).toBe(taijiquanRequirements.stances);
      expect(taijishanRequirements.stances.movements).toHaveLength(3);
    });

    it('should not have leg techniques', () => {
      expect(taijishanRequirements.leg_techniques).toBeUndefined();
    });
  });

  describe('Fan Techniques Details', () => {
    it('should have properly structured fan techniques', () => {
      const techniques = taijishanRequirements.fan_techniques.movements;
      
      const expectedTechniques = [
        { chinese: '开扇', pinyin: 'Kāi Shàn', english: 'Fan Opening' },
        { chinese: '合扇', pinyin: 'Hé Shàn', english: 'Fan Closing' },
        { chinese: '刺扇', pinyin: 'Cì Shàn', english: 'Fan Thrust' },
        { chinese: '挂扇', pinyin: 'Guà Shàn', english: 'Fan Hooking Parry' },
        { chinese: '撩扇', pinyin: 'Liāo Shàn', english: 'Fan Uppercut' },
        { chinese: '点扇', pinyin: 'Diǎn Shàn', english: 'Fan Dotting' },
        { chinese: '劈扇', pinyin: 'Pī Shàn', english: 'Fan Smack' },
        { chinese: '抛接扇', pinyin: 'Pāo Jiē Shàn', english: 'Fan Toss/Throw & Catch' }
      ];
      
      techniques.forEach((technique, index) => {
        const expected = expectedTechniques[index];
        expect(technique.chinese).toBe(expected.chinese);
        expect(technique.pinyin).toBe(expected.pinyin);
        expect(technique.english).toBe(expected.english);
        expect(technique.description).toBeDefined();
        expect(technique.description.length).toBeGreaterThan(10);
      });
    });

    it('should have detailed descriptions for each fan technique', () => {
      const techniques = taijishanRequirements.fan_techniques.movements;
      
      // Check specific technique descriptions
      const opening = techniques.find(t => t.chinese === '开扇');
      expect(opening.description).toContain('opens completely');
      expect(opening.description).toContain('180°');
      
      const closing = techniques.find(t => t.chinese === '合扇');
      expect(closing.description).toContain('closes');
      expect(closing.description).toContain('overlapped');
      
      const thrust = techniques.find(t => t.chinese === '刺扇');
      expect(thrust.description).toContain('thrusts straight forward');
      expect(thrust.description).toContain('tip of fan');
      
      const smack = techniques.find(t => t.chinese === '劈扇');
      expect(smack.description).toContain('chops downwards');
      expect(smack.description).toContain('fan body');
    });

    it('should have fan uppercut with variations', () => {
      const uppercut = taijishanRequirements.fan_techniques.movements.find(
        t => t.chinese === '撩扇'
      );
      
      expect(uppercut).toBeDefined();
      expect(uppercut.variations).toBeDefined();
      expect(uppercut.variations).toHaveLength(2);
      
      expect(uppercut.variations[0]).toContain('Open fan');
      expect(uppercut.variations[0]).toContain('curved edge');
      expect(uppercut.variations[1]).toContain('Closed fan');
      expect(uppercut.variations[1]).toContain('upper portion');
    });

    it('should have fan toss/throw & catch with rotation requirements', () => {
      const tossThrow = taijishanRequirements.fan_techniques.movements.find(
        t => t.chinese === '抛接扇'
      );
      
      expect(tossThrow).toBeDefined();
      expect(tossThrow.description).toContain('360°');
      expect(tossThrow.description).toContain('fan root');
      expect(tossThrow.description).toContain('180°');
      expect(tossThrow.description).toContain('fan\'s head');
      expect(tossThrow.subcategories).toBeUndefined();
    });
  });

  describe('Weapon Registry Integration', () => {
    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.taijishan).toBeDefined();
      expect(weaponRegistry.taijishan.name).toBe('Taijishan');
      expect(weaponRegistry.taijishan.requirements).toBe(taijishanRequirements);
    });

    it('should have proper category mappings', () => {
      const categoryMap = weaponRegistry.taijishan.judgingCategoryMap;
      expect(categoryMap.fan_techniques).toBe('weapon_techniques');
      expect(categoryMap.stances).toBe('stances');
    });

    it('should have proper special handling flags', () => {
      expect(weaponRegistry.taijishan.specialHandling.hasLegSubcategories).toBe(false);
    });

    it('should be available in getAvailableWeapons', () => {
      const availableWeapons = getAvailableWeapons();
      const taijishan = availableWeapons.find(weapon => weapon.id === 'taijishan');
      
      expect(taijishan).toBeDefined();
      expect(taijishan.name).toBe('Taijishan');
    });

    it('should retrieve requirements correctly', () => {
      expect(getWeaponRequirements('taijishan')).toBe(taijishanRequirements);
    });

    it('should map categories to judging criteria correctly', () => {
      expect(mapCategoryToJudgingCriteria('taijishan', 'fan_techniques')).toBe('weapon_techniques');
      expect(mapCategoryToJudgingCriteria('taijishan', 'stances')).toBe('stances');
    });
  });

  describe('Relationship with Taijiquan', () => {
    it('should share stances with taijiquan', () => {
      expect(taijishanRequirements.stances).toBe(taijiquanRequirements.stances);
      
      // Should have the same 3 stances
      const stanceNames = taijishanRequirements.stances.movements.map(s => s.chinese);
      expect(stanceNames).toContain('弓步'); // Bow Stance
      expect(stanceNames).toContain('仆步'); // Crouching Stance
      expect(stanceNames).toContain('虚步'); // Empty Stance
    });

    it('should have different technique categories than taijiquan', () => {
      // Taijishan has fan techniques, taijiquan has general techniques
      expect(taijishanRequirements.fan_techniques).toBeDefined();
      expect(taijishanRequirements.techniques).toBeUndefined();
      
      expect(taijiquanRequirements.techniques).toBeDefined();
      expect(taijiquanRequirements.fan_techniques).toBeUndefined();
    });

    it('should not have leg techniques like taijiquan', () => {
      expect(taijishanRequirements.leg_techniques).toBeUndefined();
      expect(taijiquanRequirements.leg_techniques).toBeDefined();
    });
  });

  describe('Data Integrity', () => {
    it('should have valid movement data structure', () => {
      // Test fan techniques
      expect(taijishanRequirements.fan_techniques.movements).toBeDefined();
      expect(Array.isArray(taijishanRequirements.fan_techniques.movements)).toBe(true);
      
      taijishanRequirements.fan_techniques.movements.forEach(movement => {
        expect(movement.chinese).toBeDefined();
        expect(movement.pinyin).toBeDefined();
        expect(movement.english).toBeDefined();
        expect(movement.description).toBeDefined();
        
        // Ensure strings are not empty
        expect(movement.chinese.trim()).not.toBe('');
        expect(movement.pinyin.trim()).not.toBe('');
        expect(movement.english.trim()).not.toBe('');
        expect(movement.description.trim()).not.toBe('');
        
        // Check variations if they exist
        if (movement.variations) {
          expect(Array.isArray(movement.variations)).toBe(true);
          movement.variations.forEach(variation => {
            expect(variation.trim()).not.toBe('');
          });
        }
        
        // Check subcategories if they exist
        if (movement.subcategories) {
          expect(Array.isArray(movement.subcategories)).toBe(true);
          movement.subcategories.forEach(sub => {
            expect(sub.type).toBeDefined();
            expect(sub.description).toBeDefined();
            expect(sub.description.trim()).not.toBe('');
          });
        }
      });
      
      // Test stances (shared with taijiquan)
      expect(taijishanRequirements.stances.movements).toBeDefined();
      expect(Array.isArray(taijishanRequirements.stances.movements)).toBe(true);
      
      taijishanRequirements.stances.movements.forEach(stance => {
        expect(stance.chinese).toBeDefined();
        expect(stance.pinyin).toBeDefined();
        expect(stance.english).toBeDefined();
        expect(stance.description).toBeDefined();
      });
    });

    it('should have unique technique names', () => {
      const chineseNames = taijishanRequirements.fan_techniques.movements.map(t => t.chinese);
      const englishNames = taijishanRequirements.fan_techniques.movements.map(t => t.english);
      const pinyinNames = taijishanRequirements.fan_techniques.movements.map(t => t.pinyin);
      
      expect(chineseNames.length).toBe(new Set(chineseNames).size);
      expect(englishNames.length).toBe(new Set(englishNames).size);
      expect(pinyinNames.length).toBe(new Set(pinyinNames).size);
    });

    it('should have meaningful descriptions', () => {
      taijishanRequirements.fan_techniques.movements.forEach(technique => {
        expect(technique.description.length).toBeGreaterThan(10);
        expect(technique.description.toLowerCase()).not.toContain('todo');
        expect(technique.description.toLowerCase()).not.toContain('placeholder');
      });
    });

    it('should have proper required count values', () => {
      expect(taijishanRequirements.fan_techniques.required_count).toBeGreaterThan(0);
      expect(taijishanRequirements.stances.required_count).toBeGreaterThan(0);
      
      // Should match the actual number of movements
      expect(taijishanRequirements.fan_techniques.required_count).toBe(taijishanRequirements.fan_techniques.movements.length);
      expect(taijishanRequirements.stances.required_count).toBe(taijishanRequirements.stances.movements.length);
    });

    it('should not have balance techniques', () => {
      expect(taijishanRequirements.balance_techniques).toBeUndefined();
    });
  });

  describe('Unique Characteristics', () => {
    it('should be distinct from other martial arts categories', () => {
      // Should not have northern-style categories
      expect(taijishanRequirements.hand_forms).toBeUndefined();
      expect(taijishanRequirements.fist_techniques).toBeUndefined();
      expect(taijishanRequirements.palm_techniques).toBeUndefined();
      expect(taijishanRequirements.elbow_techniques).toBeUndefined();
      expect(taijishanRequirements.jumping_techniques).toBeUndefined();
      
      // Should not have southern-style categories
      expect(taijishanRequirements.hand_shapes).toBeUndefined();
      expect(taijishanRequirements.bridge_techniques).toBeUndefined();
      expect(taijishanRequirements.footwork_techniques).toBeUndefined();
      expect(taijishanRequirements.broadsword_techniques).toBeUndefined();
      expect(taijishanRequirements.cudgel_techniques).toBeUndefined();
      
      // Should not have other weapon techniques
      expect(taijishanRequirements.techniques).toBeUndefined();
      expect(taijishanRequirements.sword_techniques).toBeUndefined();
      
      // Should have its own unique fan techniques
      expect(taijishanRequirements.fan_techniques).toBeDefined();
    });

    it('should have fan-specific techniques', () => {
      const techniques = taijishanRequirements.fan_techniques.movements;
      
      // Should have fundamental fan techniques
      const techniqueNames = techniques.map(t => t.chinese);
      expect(techniqueNames).toContain('开扇'); // Opening
      expect(techniqueNames).toContain('合扇'); // Closing
      expect(techniqueNames).toContain('刺扇'); // Thrust
      expect(techniqueNames).toContain('撩扇'); // Uppercut
      expect(techniqueNames).toContain('劈扇'); // Smack
      expect(techniqueNames).toContain('抛接扇'); // Toss/Throw & Catch
    });

    it('should have minimal requirements compared to other categories', () => {
      // Only 2 categories vs many others having 6+ categories
      const categoryCount = Object.keys(taijishanRequirements).length;
      expect(categoryCount).toBe(2); // fan_techniques and stances
    });

    it('should include complex techniques with rotation requirements', () => {
      const tossThrow = taijishanRequirements.fan_techniques.movements.find(
        t => t.chinese === '抛接扇'
      );
      
      expect(tossThrow).toBeDefined();
      expect(tossThrow.description).toContain('360°');
      expect(tossThrow.description).toContain('180°');
      expect(tossThrow.subcategories).toBeUndefined();
    });
  });

  describe('Weapon Technique Focus', () => {
    it('should be primarily weapon-focused', () => {
      // Most requirements should be weapon techniques
      const totalRequirements = taijishanRequirements.fan_techniques.required_count + 
                               taijishanRequirements.stances.required_count;
      const weaponRequirements = taijishanRequirements.fan_techniques.required_count;
      
      expect(weaponRequirements).toBe(8);
      expect(totalRequirements).toBe(11); // 8 fan + 3 stances
      expect(weaponRequirements / totalRequirements).toBeGreaterThan(0.7); // Over 70% weapon techniques
    });

    it('should have detailed weapon technique descriptions', () => {
      const techniques = taijishanRequirements.fan_techniques.movements;
      
      // Check that descriptions mention fan-specific details (most should contain "fan" or "扇")
      const descriptionsWithFan = techniques.filter(technique => 
        technique.description.match(/fan|扇/i) || technique.chinese.includes('扇')
      );
      
      // At least 6 out of 8 should have fan-specific descriptions
      expect(descriptionsWithFan.length).toBeGreaterThanOrEqual(6);
      
      // All techniques should have meaningful descriptions
      techniques.forEach(technique => {
        expect(technique.description.length).toBeGreaterThan(15);
      });
    });
  });

  describe('Subcategory Rendering Support', () => {

    it('should support variations rendering for fan uppercut', () => {
      const uppercut = taijishanRequirements.fan_techniques.movements.find(
        t => t.chinese === '撩扇'
      );
      
      expect(uppercut.variations).toBeDefined();
      expect(Array.isArray(uppercut.variations)).toBe(true);
      expect(uppercut.variations).toHaveLength(2);
    });

    it('should differentiate between techniques with and without subcategories', () => {
      const techniquesWithSubcategories = taijishanRequirements.fan_techniques.movements.filter(
        technique => technique.subcategories && technique.subcategories.length > 0
      );
      
      const techniquesWithoutSubcategories = taijishanRequirements.fan_techniques.movements.filter(
        technique => !technique.subcategories || technique.subcategories.length === 0
      );
      
      expect(techniquesWithSubcategories).toHaveLength(0); // No subcategories
      expect(techniquesWithoutSubcategories).toHaveLength(8); // All techniques
    });
  });

  describe('Complete Taiji Family', () => {
    it('should complete the taiji family of weapons', () => {
      const availableWeapons = getAvailableWeapons();
      const taijiWeapons = availableWeapons.filter(weapon => 
        weapon.id.startsWith('taiji')
      );
      
      expect(taijiWeapons).toHaveLength(3);
      expect(taijiWeapons.map(w => w.id)).toEqual(
        expect.arrayContaining(['taijiquan', 'taijijian', 'taijishan'])
      );
    });

    it('should all share the same stance requirements', () => {
      // All taiji weapons should share the same 3 stances
      expect(taijishanRequirements.stances).toBe(taijiquanRequirements.stances);
      
      const stanceCount = taijishanRequirements.stances.movements.length;
      expect(stanceCount).toBe(3);
    });
  });
});