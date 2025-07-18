/**
 * Scoring utilities for Wushu Nandu calculations
 * Pure functions for calculating combo and total scores
 */

import { SCORING_LIMITS } from '../data/constants.js';

/**
 * Calculate the score for an individual combo
 * @param {Object} combo - The combo object with movements and connections
 * @returns {number} - The total score for this combo
 */
export const getComboScore = (combo) => {
  // Handle invalid combo
  if (!combo || !combo.movements) {
    return 0;
  }

  if (combo.isThrowCatchCombo && combo.fixedScore !== undefined) {
    // For throw/catch combos, return difficulty points + fixed connection score
    const difficultyPoints = combo.movements.reduce((sum, mov) => {
      // Only count actual difficulty points, not the throw/catch mechanics or combo metadata
      if (mov.id === 'THROW' || mov.id === '9' || mov.id === '445A' || mov.isCombo) {
        return sum; // These don't contribute to movement score
      }
      return sum + (mov.points || 0);
    }, 0);
    return Math.round((difficultyPoints + combo.fixedScore) * 100) / 100;
  }
  
  const movementPoints = combo.movements.reduce((sum, mov) => sum + (mov.points || 0), 0);
  const connectionPoints = (combo.connections || []).reduce((sum, conn) => sum + (conn.points || 0), 0);
  
  // Use integer arithmetic to avoid floating point precision issues
  return Math.round((movementPoints + connectionPoints) * 100) / 100;
};

/**
 * Calculate total movement score across all combos
 * @param {Array} combos - Array of combo objects
 * @returns {number} - Total movement score (uncapped)
 */
export const getTotalMovementScore = (combos) => {
  if (!Array.isArray(combos)) {
    return 0;
  }
  
  const rawScore = combos.reduce((sum, combo) => {
    if (!combo || !combo.movements) {
      return sum;
    }
    
    if (combo.isThrowCatchCombo) {
      // For throw/catch combos, only count the difficulty points (not the fixed combo score)
      return sum + combo.movements.reduce((movSum, mov) => {
        // Only count actual difficulty points, not the throw/catch mechanics
        if (mov.id === 'THROW' || mov.id === 'CATCH' || mov.id === '445A') {
          return movSum; // These don't contribute to movement score
        }
        return movSum + (mov.points || 0);
      }, 0);
    }
    return sum + combo.movements.reduce((movSum, mov) => movSum + (mov.points || 0), 0);
  }, 0);
  
  return Math.round(rawScore * 100) / 100;
};

/**
 * Calculate total connection score across all combos
 * @param {Array} combos - Array of combo objects
 * @returns {number} - Total connection score (uncapped)
 */
export const getTotalConnectionScore = (combos) => {
  if (!Array.isArray(combos)) {
    return 0;
  }
  
  const rawScore = combos.reduce((sum, combo) => {
    if (!combo) {
      return sum;
    }
    
    if (combo.isThrowCatchCombo) {
      // For throw/catch combos, use the fixed score as connection bonus
      return sum + (combo.fixedScore || 0);
    }
    return sum + (combo.connections || []).reduce((connSum, conn) => connSum + (conn.points || 0), 0);
  }, 0);
  
  return Math.round(rawScore * 100) / 100;
};

/**
 * Calculate the final total score
 * @param {Array} combos - Array of combo objects
 * @returns {Object} - Object with movementScore, connectionScore, and totalScore
 */
export const getTotalScore = (combos) => {
  const rawMovementScore = getTotalMovementScore(combos);
  const rawConnectionScore = getTotalConnectionScore(combos);
  
  // Cap each category independently - excess in one cannot compensate for deficiency in the other
  const cappedMovementScore = Math.min(rawMovementScore, SCORING_LIMITS.MOVEMENT_SCORE_CAP);
  const cappedConnectionScore = Math.min(rawConnectionScore, SCORING_LIMITS.CONNECTION_SCORE_CAP);
  
  // Use integer arithmetic to avoid floating point precision issues
  const totalScore = Math.round((cappedMovementScore + cappedConnectionScore) * 100) / 100;
  
  return {
    movementScore: rawMovementScore,
    connectionScore: rawConnectionScore,
    totalScore
  };
};

/**
 * Check if scores exceed their limits
 * @param {Array} combos - Array of combo objects
 * @returns {Object} - Object with boolean flags for exceeded limits
 */
export const getScoreLimits = (combos) => {
  const { movementScore, connectionScore, totalScore } = getTotalScore(combos);
  
  return {
    movementExceeded: movementScore > SCORING_LIMITS.MOVEMENT_SCORE_CAP,
    connectionExceeded: connectionScore > SCORING_LIMITS.CONNECTION_SCORE_CAP,
    totalExceeded: totalScore > SCORING_LIMITS.TOTAL_SCORE_CAP
  };
};