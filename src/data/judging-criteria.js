// Style-aware judging criteria loader
import { judgingCriteria as northernCriteria } from './northern-judging-criteria.js';
import { judgingCriteria as southernCriteria } from './southern-judging-criteria.js';
import { judgingCriteria as taijiCriteria } from './taiji-judging-criteria.js';

export const getJudgingCriteria = (style = 'northern') => {
  switch (style) {
    case 'southern':
      return southernCriteria;
    case 'taiji':
      return taijiCriteria;
    case 'northern':
    default:
      return northernCriteria;
  }
};

// Export the northern criteria as default for backward compatibility
export const judgingCriteria = northernCriteria;