// Centralized weapon registry for easy drop-in of new weapon forms
// To add a new weapon form:
// 1. Create a requirements file (e.g., requirements/daoshuRequirements.js)
// 2. Add entry to this registry
// 3. Done! The form will automatically appear in Requirements and Deductions

import { changquanRequirements } from './requirements/changquan-requirements.js';
import { jianshuRequirements } from './requirements/jianshuRequirements.js';
import { daoshuRequirements } from './requirements/daoshuRequirements.js';
import { gunshuRequirements } from './requirements/gunshuRequirements.js';
import { qiangshuRequirements } from './requirements/qiangshuRequirements.js';

export const weaponRegistry = {
  changquan: {
    id: 'changquan',
    name: 'Changquan',
    requirements: changquanRequirements,
    // Maps requirement categories to judging criteria categories
    judgingCategoryMap: {
      hand_forms: 'hand_forms',
      fist_techniques: 'fist_techniques', 
      palm_techniques: 'palm_techniques',
      elbow_techniques: 'elbow_techniques',
      stances: 'stances',
      leg_techniques: 'leg_techniques',
      balance_techniques: 'balance_techniques',
      jumping_techniques: 'jumping_techniques'
    },
    // Special handling for complex categories (like leg techniques with subcategories)
    specialHandling: {
      hasLegSubcategories: true
    }
  },
  jianshu: {
    id: 'jianshu',
    name: 'Jianshu',
    requirements: jianshuRequirements,
    judgingCategoryMap: {
      sword_techniques: 'weapon_techniques', // Map sword techniques to weapon techniques in judging criteria
      stances: 'stances',
      balance_techniques: 'balance_techniques'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  daoshu: {
    id: 'daoshu',
    name: 'Daoshu',
    requirements: daoshuRequirements,
    judgingCategoryMap: {
      broadsword_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  gunshu: {
    id: 'gunshu',
    name: 'Gunshu',
    requirements: gunshuRequirements,
    judgingCategoryMap: {
      cudgel_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  qiangshu: {
    id: 'qiangshu',
    name: 'Qiangshu',
    requirements: qiangshuRequirements,
    judgingCategoryMap: {
      spear_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  }
  // Future weapon forms can be added here:
};

// Helper functions for the registry
export const getWeaponConfig = (weaponId) => {
  return weaponRegistry[weaponId];
};

export const getAvailableWeapons = () => {
  return Object.values(weaponRegistry).filter(weapon => weapon.requirements);
};

export const getWeaponRequirements = (weaponId) => {
  const config = getWeaponConfig(weaponId);
  return config?.requirements || null;
};

export const mapCategoryToJudgingCriteria = (weaponId, categoryId) => {
  const config = getWeaponConfig(weaponId);
  return config?.judgingCategoryMap[categoryId] || categoryId;
};

export const hasSpecialHandling = (weaponId, handlingType) => {
  const config = getWeaponConfig(weaponId);
  return config?.specialHandling[handlingType] || false;
};