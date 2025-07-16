import { describe, it, expect } from 'vitest';
import { nanquanRequirements } from '../data/requirements/nanquan-requirements.js';
import { nandaoRequirements } from '../data/requirements/nandao-requirements.js';
import { nangunRequirements } from '../data/requirements/nangun-requirements.js';
import { 
  weaponRegistry, 
  getAvailableWeapons, 
  getWeaponRequirements, 
  mapCategoryToJudgingCriteria 
} from '../data/weapon-registry.js';
import { judgingCriteria } from '../data/judging-criteria.js';

describe('Southern Categories', () => {
  
  describe('Nanquan (Southern Fist)', () => {
    it('should have the correct structure', () => {
      expect(nanquanRequirements).toBeDefined();
      expect(nanquanRequirements.hand_shapes).toBeDefined();
      expect(nanquanRequirements.fist_techniques).toBeDefined();
      expect(nanquanRequirements.bridge_techniques).toBeDefined();
      expect(nanquanRequirements.stances).toBeDefined();
      expect(nanquanRequirements.footwork_techniques).toBeDefined();
      expect(nanquanRequirements.leg_techniques).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(nanquanRequirements.hand_shapes.required_count).toBe(1);
      expect(nanquanRequirements.fist_techniques.required_count).toBe(2);
      expect(nanquanRequirements.bridge_techniques.required_count).toBe(1);
      expect(nanquanRequirements.stances.required_count).toBe(6);
      expect(nanquanRequirements.footwork_techniques.required_count).toBe(1);
      expect(nanquanRequirements.leg_techniques.required_count).toBe(1);
    });

    it('should have Tiger Claw hand shape', () => {
      const tigerClaw = nanquanRequirements.hand_shapes.movements[0];
      expect(tigerClaw.chinese).toBe('虎爪');
      expect(tigerClaw.pinyin).toBe('Hǔ Zhǎo');
      expect(tigerClaw.english).toBe("Tiger's Claw");
    });

    it('should have fist techniques with subcategories', () => {
      const hangingCoveringFist = nanquanRequirements.fist_techniques.movements[0];
      expect(hangingCoveringFist.chinese).toBe('挂盖拳');
      expect(hangingCoveringFist.subcategories).toBeDefined();
      expect(hangingCoveringFist.subcategories).toHaveLength(2);
      
      const hangingFist = hangingCoveringFist.subcategories[0];
      expect(hangingFist.chinese).toBe('挂拳');
      expect(hangingFist.english).toBe('Hanging Fist');
      
      const coveringFist = hangingCoveringFist.subcategories[1];
      expect(coveringFist.chinese).toBe('盖拳');
      expect(coveringFist.english).toBe('Covering Fist');
    });

    it('should have butterfly stance with subcategories', () => {
      const butterflyStance = nanquanRequirements.stances.movements.find(
        stance => stance.chinese === '蝶步'
      );
      expect(butterflyStance).toBeDefined();
      expect(butterflyStance.subcategories).toBeDefined();
      expect(butterflyStance.subcategories).toHaveLength(2);
      
      const singleButterfly = butterflyStance.subcategories[0];
      expect(singleButterfly.chinese).toBe('单蝶步');
      expect(singleButterfly.english).toBe('Single Butterfly Stance');
      
      const doubleButterfly = butterflyStance.subcategories[1];
      expect(doubleButterfly.chinese).toBe('双蝶步');
      expect(doubleButterfly.english).toBe('Double Butterfly Stance');
    });

    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.nanquan).toBeDefined();
      expect(weaponRegistry.nanquan.name).toBe('Nanquan');
      expect(weaponRegistry.nanquan.requirements).toBe(nanquanRequirements);
    });
  });

  describe('Nandao (Southern Broadsword)', () => {
    it('should have the correct structure', () => {
      expect(nandaoRequirements).toBeDefined();
      expect(nandaoRequirements.broadsword_techniques).toBeDefined();
      expect(nandaoRequirements.stances).toBeDefined();
      expect(nandaoRequirements.footwork_techniques).toBeDefined();
      expect(nandaoRequirements.leg_techniques).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(nandaoRequirements.broadsword_techniques.required_count).toBe(8);
      expect(nandaoRequirements.stances.required_count).toBe(6);
      expect(nandaoRequirements.footwork_techniques.required_count).toBe(1);
      expect(nandaoRequirements.leg_techniques.required_count).toBe(1);
    });

    it('should have 8 broadsword techniques', () => {
      const techniques = nandaoRequirements.broadsword_techniques.movements;
      expect(techniques).toHaveLength(8);
      
      const expectedTechniques = [
        '缠头刀', '裹脑刀', '劈刀', '抹刀', '格刀', '截刀', '扫刀', '剪腕花刀'
      ];
      
      techniques.forEach((technique, index) => {
        expect(technique.chinese).toBe(expectedTechniques[index]);
        expect(technique.pinyin).toBeDefined();
        expect(technique.english).toBeDefined();
        expect(technique.description).toBeDefined();
      });
    });

    it('should share stances with nanquan', () => {
      expect(nandaoRequirements.stances).toBe(nanquanRequirements.stances);
    });

    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.nandao).toBeDefined();
      expect(weaponRegistry.nandao.name).toBe('Nandao');
      expect(weaponRegistry.nandao.requirements).toBe(nandaoRequirements);
    });
  });

  describe('Nangun (Southern Cudgel)', () => {
    it('should have the correct structure', () => {
      expect(nangunRequirements).toBeDefined();
      expect(nangunRequirements.cudgel_techniques).toBeDefined();
      expect(nangunRequirements.stances).toBeDefined();
      expect(nangunRequirements.footwork_techniques).toBeDefined();
      expect(nangunRequirements.leg_techniques).toBeDefined();
    });

    it('should have correct required counts', () => {
      expect(nangunRequirements.cudgel_techniques.required_count).toBe(8);
      expect(nangunRequirements.stances.required_count).toBe(6);
      expect(nangunRequirements.footwork_techniques.required_count).toBe(1);
      expect(nangunRequirements.leg_techniques.required_count).toBe(1);
    });

    it('should have 8 cudgel techniques', () => {
      const techniques = nangunRequirements.cudgel_techniques.movements;
      expect(techniques).toHaveLength(8);
      
      const expectedTechniques = [
        '劈棍', '崩棍', '绞棍', '滚压棍', '格棍', '击棍', '顶棍', '抛棍'
      ];
      
      techniques.forEach((technique, index) => {
        expect(technique.chinese).toBe(expectedTechniques[index]);
        expect(technique.pinyin).toBeDefined();
        expect(technique.english).toBeDefined();
        expect(technique.description).toBeDefined();
      });
    });

    it('should share stances with nanquan', () => {
      expect(nangunRequirements.stances).toBe(nanquanRequirements.stances);
    });

    it('should be registered in weapon registry', () => {
      expect(weaponRegistry.nangun).toBeDefined();
      expect(weaponRegistry.nangun.name).toBe('Nangun');
      expect(weaponRegistry.nangun.requirements).toBe(nangunRequirements);
    });
  });

  describe('Southern Categories Integration', () => {
    it('should have all three southern categories in weapon registry', () => {
      expect(weaponRegistry.nanquan).toBeDefined();
      expect(weaponRegistry.nandao).toBeDefined();
      expect(weaponRegistry.nangun).toBeDefined();
    });

    it('should have proper category mappings in weapon registry', () => {
      // Nanquan mappings
      expect(weaponRegistry.nanquan.judgingCategoryMap.hand_shapes).toBe('hand_shapes');
      expect(weaponRegistry.nanquan.judgingCategoryMap.fist_techniques).toBe('fist_techniques');
      expect(weaponRegistry.nanquan.judgingCategoryMap.bridge_techniques).toBe('bridge_techniques');
      
      // Nandao mappings
      expect(weaponRegistry.nandao.judgingCategoryMap.broadsword_techniques).toBe('weapon_techniques');
      
      // Nangun mappings
      expect(weaponRegistry.nangun.judgingCategoryMap.cudgel_techniques).toBe('weapon_techniques');
    });

    it('should have proper special handling flags', () => {
      expect(weaponRegistry.nanquan.specialHandling.hasLegSubcategories).toBe(false);
      expect(weaponRegistry.nandao.specialHandling.hasLegSubcategories).toBe(false);
      expect(weaponRegistry.nangun.specialHandling.hasLegSubcategories).toBe(false);
    });

    it('should share common requirements correctly', () => {
      // All three should share the same stances
      expect(nandaoRequirements.stances).toBe(nanquanRequirements.stances);
      expect(nangunRequirements.stances).toBe(nanquanRequirements.stances);
      
      // All three should share the same footwork
      expect(nandaoRequirements.footwork_techniques).toBe(nanquanRequirements.footwork_techniques);
      expect(nangunRequirements.footwork_techniques).toBe(nanquanRequirements.footwork_techniques);
      
      // All three should share the same leg techniques
      expect(nandaoRequirements.leg_techniques).toBe(nanquanRequirements.leg_techniques);
      expect(nangunRequirements.leg_techniques).toBe(nanquanRequirements.leg_techniques);
    });
  });

  describe('Data Integrity', () => {
    it('should have valid movement data structure for all southern categories', () => {
      const categories = [
        { name: 'nanquan', requirements: nanquanRequirements },
        { name: 'nandao', requirements: nandaoRequirements },
        { name: 'nangun', requirements: nangunRequirements }
      ];

      categories.forEach(({ name, requirements }) => {
        Object.entries(requirements).forEach(([categoryKey, categoryData]) => {
          expect(categoryData.movements).toBeDefined();
          expect(Array.isArray(categoryData.movements)).toBe(true);
          
          categoryData.movements.forEach(movement => {
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
        });
      });
    });

    it('should not have balance techniques in southern categories', () => {
      expect(nanquanRequirements.balance_techniques).toBeUndefined();
      expect(nandaoRequirements.balance_techniques).toBeUndefined();
      expect(nangunRequirements.balance_techniques).toBeUndefined();
    });

    it('should have unique weapon technique categories', () => {
      // Each southern weapon should have its own unique weapon technique category
      expect(nanquanRequirements.hand_shapes).toBeDefined(); // Only nanquan has this
      expect(nanquanRequirements.fist_techniques).toBeDefined(); // Only nanquan has this
      expect(nanquanRequirements.bridge_techniques).toBeDefined(); // Only nanquan has this
      
      expect(nandaoRequirements.broadsword_techniques).toBeDefined(); // Only nandao has this
      expect(nandaoRequirements.hand_shapes).toBeUndefined();
      expect(nandaoRequirements.fist_techniques).toBeUndefined();
      expect(nandaoRequirements.bridge_techniques).toBeUndefined();
      
      expect(nangunRequirements.cudgel_techniques).toBeDefined(); // Only nangun has this
      expect(nangunRequirements.hand_shapes).toBeUndefined();
      expect(nangunRequirements.fist_techniques).toBeUndefined();
      expect(nangunRequirements.bridge_techniques).toBeUndefined();
    });
  });

  describe('Weapon Registry Integration', () => {
    it('should export all southern categories from getAvailableWeapons', () => {
      const availableWeapons = getAvailableWeapons();
      
      const southernWeapons = availableWeapons.filter(weapon => 
        ['nanquan', 'nandao', 'nangun'].includes(weapon.id)
      );
      
      expect(southernWeapons).toHaveLength(3);
      expect(southernWeapons.map(w => w.id)).toEqual(
        expect.arrayContaining(['nanquan', 'nandao', 'nangun'])
      );
    });

    it('should retrieve weapon requirements correctly', () => {
      expect(getWeaponRequirements('nanquan')).toBe(nanquanRequirements);
      expect(getWeaponRequirements('nandao')).toBe(nandaoRequirements);
      expect(getWeaponRequirements('nangun')).toBe(nangunRequirements);
    });

    it('should map categories to judging criteria correctly', () => {
      // Test nanquan mappings
      expect(mapCategoryToJudgingCriteria('nanquan', 'hand_shapes')).toBe('hand_shapes');
      expect(mapCategoryToJudgingCriteria('nanquan', 'fist_techniques')).toBe('fist_techniques');
      
      // Test weapon technique mappings
      expect(mapCategoryToJudgingCriteria('nandao', 'broadsword_techniques')).toBe('weapon_techniques');
      expect(mapCategoryToJudgingCriteria('nangun', 'cudgel_techniques')).toBe('weapon_techniques');
    });
  });
});