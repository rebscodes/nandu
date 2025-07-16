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
import { nanquanRequirements } from './requirements/nanquan-requirements.js';
import { nandaoRequirements } from './requirements/nandao-requirements.js';
import { nangunRequirements } from './requirements/nangun-requirements.js';
import { taijiquanRequirements } from './requirements/taijiquan-requirements.js';
import { taijijianRequirements } from './requirements/taijijian-requirements.js';
import { taijishanRequirements } from './requirements/taijishan-requirements.js';

export const weaponRegistry = {
  changquan: {
    id: 'changquan',
    name: 'Changquan',
    group: 'Northern',
    groupOrder: 1,
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
  daoshu: {
    id: 'daoshu',
    name: 'Daoshu',
    group: 'Northern',
    groupOrder: 2,
    requirements: daoshuRequirements,
    judgingCategoryMap: {
      broadsword_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  jianshu: {
    id: 'jianshu',
    name: 'Jianshu',
    group: 'Northern',
    groupOrder: 3,
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
  gunshu: {
    id: 'gunshu',
    name: 'Gunshu',
    group: 'Northern',
    groupOrder: 4,
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
    group: 'Northern',
    groupOrder: 5,
    requirements: qiangshuRequirements,
    judgingCategoryMap: {
      spear_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  nanquan: {
    id: 'nanquan',
    name: 'Nanquan',
    group: 'Southern',
    groupOrder: 1,
    requirements: nanquanRequirements,
    judgingCategoryMap: {
      hand_shapes: 'hand_shapes',
      fist_techniques: 'fist_techniques',
      bridge_techniques: 'bridge_techniques',
      stances: 'stances',
      footwork_techniques: 'footwork_techniques',
      leg_techniques: 'leg_techniques'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  nandao: {
    id: 'nandao',
    name: 'Nandao',
    group: 'Southern',
    groupOrder: 2,
    requirements: nandaoRequirements,
    judgingCategoryMap: {
      broadsword_techniques: 'weapon_techniques',
      stances: 'stances',
      footwork_techniques: 'footwork_techniques',
      leg_techniques: 'leg_techniques'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  nangun: {
    id: 'nangun',
    name: 'Nangun',
    group: 'Southern',
    groupOrder: 3,
    requirements: nangunRequirements,
    judgingCategoryMap: {
      cudgel_techniques: 'weapon_techniques',
      stances: 'stances',
      footwork_techniques: 'footwork_techniques',
      leg_techniques: 'leg_techniques'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  taijiquan: {
    id: 'taijiquan',
    name: 'Taijiquan',
    group: 'Taiji',
    groupOrder: 1,
    requirements: taijiquanRequirements,
    judgingCategoryMap: {
      techniques: 'techniques',
      stances: 'stances',
      leg_techniques: 'leg_techniques'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  taijijian: {
    id: 'taijijian',
    name: 'Taijijian',
    group: 'Taiji',
    groupOrder: 2,
    requirements: taijijianRequirements,
    judgingCategoryMap: {
      sword_techniques: 'weapon_techniques',
      stances: 'stances'
    },
    specialHandling: {
      hasLegSubcategories: false
    }
  },
  taijishan: {
    id: 'taijishan',
    name: 'Taijishan',
    group: 'Taiji',
    groupOrder: 3,
    requirements: taijishanRequirements,
    judgingCategoryMap: {
      fan_techniques: 'weapon_techniques',
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

export const getWeaponsByGroup = () => {
  const weapons = getAvailableWeapons();
  const groups = {};
  
  weapons.forEach(weapon => {
    if (!groups[weapon.group]) {
      groups[weapon.group] = [];
    }
    groups[weapon.group].push(weapon);
  });
  
  // Sort weapons within each group by groupOrder
  Object.keys(groups).forEach(group => {
    groups[group].sort((a, b) => (a.groupOrder || 0) - (b.groupOrder || 0));
  });
  
  return groups;
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