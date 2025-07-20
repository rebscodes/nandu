import { describe, it, expect } from 'vitest';
import { judgingCriteria } from '../data/judging-criteria.js';
import { judgingCriteria as southernJudgingCriteria } from '../data/southern-judging-criteria.js';
import { judgingCriteria as taijiJudgingCriteria } from '../data/taiji-judging-criteria.js';

// Helper function to simulate the search functionality from Deductions component
const searchExecutionStandards = (searchTerm, style) => {
  const getJudgingCriteriaForStyle = (style) => {
    switch(style) {
      case 'Northern':
        return judgingCriteria;
      case 'Southern':
        return southernJudgingCriteria;
      case 'Taiji':
        return taijiJudgingCriteria;
      default:
        return judgingCriteria;
    }
  };

  const removeTones = (text) => {
    if (!text) return '';
    return text
      .replace(/[āáǎàa]/g, 'a')
      .replace(/[ēéěèe]/g, 'e')
      .replace(/[īíǐìi]/g, 'i')
      .replace(/[ōóǒòo]/g, 'o')
      .replace(/[ūúǔùu]/g, 'u')
      .replace(/[ǖǘǚǜü]/g, 'u')
      .replace(/[ńňǹ]/g, 'n')
      .replace(/[ĀÁǍÀa]/g, 'A')
      .replace(/[ĒÉĚÈe]/g, 'E')
      .replace(/[ĪÍǏÌi]/g, 'I')
      .replace(/[ŌÓǑÒo]/g, 'O')
      .replace(/[ŪÚǓÙu]/g, 'U')
      .replace(/[ǕǗǙǛü]/g, 'U')
      .replace(/[ŃŇǸ]/g, 'N');
  };

  if (!searchTerm.trim()) return [];

  const criteria = getJudgingCriteriaForStyle(style);
  const results = [];
  const searchLower = searchTerm.toLowerCase();
  const searchNoTones = removeTones(searchLower);

  Object.keys(criteria).forEach(categoryKey => {
    const category = criteria[categoryKey];
    if (typeof category !== 'object' || !category) return;

    Object.keys(category).forEach(techniqueKey => {
      const technique = category[techniqueKey];
      if (typeof technique !== 'object' || !technique.chinese) return;

      const matchesChinese = technique.chinese?.toLowerCase().includes(searchLower);
      const matchesEnglish = technique.english?.toLowerCase().includes(searchLower);
      const matchesPinyin = technique.pinyin?.toLowerCase().includes(searchLower);
      const matchesPinyinNoTones = removeTones(technique.pinyin?.toLowerCase() || '').includes(searchNoTones);
      const matchesCode = technique.code?.toLowerCase().includes(searchLower);

      // Also search in requirements if they exist
      let matchesRequirements = false;
      if (technique.requirements) {
        technique.requirements.forEach(req => {
          const reqText = `${req.chinese || ''} ${req.english || ''}`.toLowerCase();
          if (reqText.includes(searchLower)) {
            matchesRequirements = true;
          }
        });
      }

      if (matchesChinese || matchesEnglish || matchesPinyin || matchesPinyinNoTones || matchesCode || matchesRequirements) {
        results.push({
          techniqueKey,
          technique: {
            ...technique,
            category: categoryKey
          }
        });
      }
    });
  });

  return results;
};

describe('Execution Standards Search Functionality', () => {
  
  describe('Search by Chinese Text', () => {
    it('should find rotation standards when searching for "转体"', () => {
      const northernResults = searchExecutionStandards('转体', 'Northern');
      const southernResults = searchExecutionStandards('转体', 'Southern');
      const taijiResults = searchExecutionStandards('转体', 'Taiji');

      // Should find rotation calculation standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernRotation = northernResults.find(r => r.technique.english === 'Standard Requirements for Degree of Rotation');
      expect(northernRotation).toBeDefined();
      expect(northernRotation.technique.chinese).toBe('转体度数的规定');
    });

    it('should find run-up standards when searching for "助跑"', () => {
      const northernResults = searchExecutionStandards('助跑', 'Northern');
      const southernResults = searchExecutionStandards('助跑', 'Southern');
      const taijiResults = searchExecutionStandards('助跑', 'Taiji');

      // Should find run-up standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernRunUp = northernResults.find(r => r.technique.english === 'Standard Requirements for Run-up Steps');
      expect(northernRunUp).toBeDefined();
      expect(northernRunUp.technique.chinese).toBe('助跑步数的规定');
    });

    it('should find connection standards when searching for "连接"', () => {
      const northernResults = searchExecutionStandards('连接', 'Northern');
      const southernResults = searchExecutionStandards('连接', 'Southern');
      const taijiResults = searchExecutionStandards('连接', 'Taiji');

      // Should find connection standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernConnection = northernResults.find(r => r.technique.english === 'Standard Requirements for Degree of Difficulty Connections');
      expect(northernConnection).toBeDefined();
      expect(northernConnection.technique.chinese).toBe('连接动作的规定');
    });

    it('should find evaluation standards when searching for "评判"', () => {
      const northernResults = searchExecutionStandards('评判', 'Northern');
      const southernResults = searchExecutionStandards('评判', 'Southern');
      const taijiResults = searchExecutionStandards('评判', 'Taiji');

      // Should find evaluation standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernEvaluation = northernResults.find(r => r.technique.english === 'Evaluation Standards');
      expect(northernEvaluation).toBeDefined();
      expect(northernEvaluation.technique.chinese).toBe('评判的规定');
    });
  });

  describe('Search by English Text', () => {
    it('should find rotation standards when searching for "rotation"', () => {
      const northernResults = searchExecutionStandards('rotation', 'Northern');
      const southernResults = searchExecutionStandards('rotation', 'Southern');
      const taijiResults = searchExecutionStandards('rotation', 'Taiji');

      // Should find rotation standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernRotation = northernResults.find(r => r.technique.english.includes('Rotation'));
      expect(northernRotation).toBeDefined();
    });

    it('should find run-up standards when searching for "run-up"', () => {
      const northernResults = searchExecutionStandards('run-up', 'Northern');
      const southernResults = searchExecutionStandards('run-up', 'Southern');
      const taijiResults = searchExecutionStandards('run-up', 'Taiji');

      // Should find run-up standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernRunUp = northernResults.find(r => r.technique.english.includes('Run-up') || r.technique.english.includes('Run-Up'));
      expect(northernRunUp).toBeDefined();
    });

    it('should find evaluation standards when searching for "evaluation"', () => {
      const northernResults = searchExecutionStandards('evaluation', 'Northern');
      const southernResults = searchExecutionStandards('evaluation', 'Southern');
      const taijiResults = searchExecutionStandards('evaluation', 'Taiji');

      // Should find evaluation standards in all styles
      expect(northernResults.length).toBeGreaterThan(0);
      expect(southernResults.length).toBeGreaterThan(0);
      expect(taijiResults.length).toBeGreaterThan(0);

      // Check that we found the right technique
      const northernEvaluation = northernResults.find(r => r.technique.english === 'Evaluation Standards');
      expect(northernEvaluation).toBeDefined();
    });
  });

  describe('Search by Code', () => {
    it('should find rotation standards when searching by code "转体"', () => {
      const northernResults = searchExecutionStandards('转体', 'Northern');
      
      // Should find rotation standards
      const rotationStandard = northernResults.find(r => r.technique.code === '转体');
      expect(rotationStandard).toBeDefined();
      expect(rotationStandard.technique.english).toBe('Standard Requirements for Degree of Rotation');
    });

    it('should find run-up standards when searching by code "助跑"', () => {
      const northernResults = searchExecutionStandards('助跑', 'Northern');
      
      // Should find run-up standards
      const runUpStandard = northernResults.find(r => r.technique.code === '助跑');
      expect(runUpStandard).toBeDefined();
      expect(runUpStandard.technique.english).toBe('Standard Requirements for Run-up Steps');
    });

    it('should find connection standards when searching by code "连接"', () => {
      const northernResults = searchExecutionStandards('连接', 'Northern');
      
      // Should find connection standards
      const connectionStandard = northernResults.find(r => r.technique.code === '连接');
      expect(connectionStandard).toBeDefined();
      expect(connectionStandard.technique.english).toBe('Standard Requirements for Degree of Difficulty Connections');
    });

    it('should find evaluation standards when searching by code "评判"', () => {
      const northernResults = searchExecutionStandards('评判', 'Northern');
      
      // Should find evaluation standards
      const evaluationStandard = northernResults.find(r => r.technique.code === '评判');
      expect(evaluationStandard).toBeDefined();
      expect(evaluationStandard.technique.english).toBe('Evaluation Standards');
    });
  });

  describe('Requirements Content Searchability', () => {
    it('should find execution standards when searching within requirements content - Chinese', () => {
      // Search for specific text that should be in rotation requirements
      const northernResults = searchExecutionStandards('起跳时两脚之间连线', 'Northern');
      
      // Should find rotation standards because this text is in the requirements
      expect(northernResults.length).toBeGreaterThan(0);
      const rotationStandard = northernResults.find(r => r.technique.english === 'Standard Requirements for Degree of Rotation');
      expect(rotationStandard).toBeDefined();
    });

    it('should find execution standards when searching within requirements content - English', () => {
      // Search for specific text that should be in rotation requirements
      const northernResults = searchExecutionStandards('angle formed by the line between both feet', 'Northern');
      
      // Should find rotation standards because this text is in the requirements
      expect(northernResults.length).toBeGreaterThan(0);
      const rotationStandard = northernResults.find(r => r.technique.english === 'Standard Requirements for Degree of Rotation');
      expect(rotationStandard).toBeDefined();
    });

    it('should find taiji-specific content in requirements', () => {
      // Search for taiji-specific text
      const taijiResults = searchExecutionStandards('静静连接', 'Taiji');
      
      // Should find taiji rotation standards because this text is in the requirements
      expect(taijiResults.length).toBeGreaterThan(0);
      const rotationStandard = taijiResults.find(r => r.technique.english === 'Standard Requirements for Degree of Rotation');
      expect(rotationStandard).toBeDefined();
    });

    it('should find southern-specific content in requirements', () => {
      // Search for southern-specific text
      const southernResults = searchExecutionStandards('324A', 'Southern');
      
      // Should find southern evaluation standards because this text is in the requirements
      expect(southernResults.length).toBeGreaterThan(0);
      const evaluationStandard = southernResults.find(r => r.technique.english === 'Evaluation Standards');
      expect(evaluationStandard).toBeDefined();
    });
  });

  describe('Style-Specific Results', () => {
    it('should find style-specific table references only in correct styles', () => {
      // Northern should reference Table 10-3-7
      const northernResults = searchExecutionStandards('10-3-7', 'Northern');
      expect(northernResults.length).toBeGreaterThan(0);
      
      // Southern should reference Table 10-3-8
      const southernResults = searchExecutionStandards('10-3-8', 'Southern');
      expect(southernResults.length).toBeGreaterThan(0);
      
      // Taiji should reference Table 10-3-9
      const taijiResults = searchExecutionStandards('10-3-9', 'Taiji');
      expect(taijiResults.length).toBeGreaterThan(0);
    });

    it('should find style-specific technique categories only in correct styles', () => {
      // Northern should reference Changquan
      const northernResults = searchExecutionStandards('Changquan', 'Northern');
      expect(northernResults.length).toBeGreaterThan(0);
      
      // Southern should reference Nanquan
      const southernResults = searchExecutionStandards('Nanquan', 'Southern');
      expect(southernResults.length).toBeGreaterThan(0);
      
      // Taiji should reference Taijiquan
      const taijiResults = searchExecutionStandards('Taijiquan', 'Taiji');
      expect(taijiResults.length).toBeGreaterThan(0);
    });

    it('should find southern-specific 324 rules only in Southern style', () => {
      // Southern should have 324A/324B/324C rules
      const southernResults = searchExecutionStandards('324A', 'Southern');
      expect(southernResults.length).toBeGreaterThan(0);
      
      // Northern should NOT have these specific rules
      const northernResults = searchExecutionStandards('324A', 'Northern');
      const has324Rule = northernResults.some(r => 
        r.technique.requirements?.some(req => 
          req.chinese.includes('324A') || req.english.includes('324A')
        )
      );
      expect(has324Rule).toBe(false);
    });

    it('should find taiji-specific static-static connection rules only in Taiji style', () => {
      // Taiji should have static-static connection rules
      const taijiResults = searchExecutionStandards('静静连接不能上步', 'Taiji');
      expect(taijiResults.length).toBeGreaterThan(0);
      
      // Northern should NOT have these specific rules
      const northernResults = searchExecutionStandards('静静连接不能上步', 'Northern');
      expect(northernResults.length).toBe(0);
      
      // Southern should NOT have these specific rules
      const southernResults = searchExecutionStandards('静静连接不能上步', 'Southern');
      expect(southernResults.length).toBe(0);
    });
  });

  describe('Case Insensitive Search', () => {
    it('should find results regardless of case - English', () => {
      const lowerResults = searchExecutionStandards('rotation', 'Northern');
      const upperResults = searchExecutionStandards('ROTATION', 'Northern');
      const mixedResults = searchExecutionStandards('Rotation', 'Northern');
      
      expect(lowerResults.length).toBeGreaterThan(0);
      expect(upperResults.length).toBe(lowerResults.length);
      expect(mixedResults.length).toBe(lowerResults.length);
    });

    it('should find results regardless of case - Chinese', () => {
      const results1 = searchExecutionStandards('转体', 'Northern');
      const results2 = searchExecutionStandards('转体', 'Northern');
      
      expect(results1.length).toBeGreaterThan(0);
      expect(results2.length).toBe(results1.length);
    });
  });

  describe('Empty Search Handling', () => {
    it('should return empty array for empty search term', () => {
      const results = searchExecutionStandards('', 'Northern');
      expect(results).toEqual([]);
    });

    it('should return empty array for whitespace-only search term', () => {
      const results = searchExecutionStandards('   ', 'Northern');
      expect(results).toEqual([]);
    });
  });
});