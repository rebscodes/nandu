/**
 * Scoring utilities for Wushu Nandu calculations
 * Pure functions for calculating combo and total scores
 */

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
 * @returns {number} - Total movement score (capped at 1.4)
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
  
  return Math.min(Math.round(rawScore * 100) / 100, 1.4);
};

/**
 * Calculate total connection score across all combos
 * @param {Array} combos - Array of combo objects
 * @returns {number} - Total connection score (capped at 0.6)
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
  
  return Math.min(Math.round(rawScore * 100) / 100, 0.6);
};

/**
 * Calculate the final total score
 * @param {Array} combos - Array of combo objects
 * @returns {Object} - Object with movementScore, connectionScore, and totalScore
 */
export const getTotalScore = (combos) => {
  const movementScore = getTotalMovementScore(combos);
  const connectionScore = getTotalConnectionScore(combos);
  
  // Use integer arithmetic to avoid floating point precision issues
  const totalScore = Math.min(
    Math.round((movementScore + connectionScore) * 100) / 100, 
    2.0
  );
  
  return {
    movementScore,
    connectionScore,
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
    movementExceeded: movementScore >= 1.4,
    connectionExceeded: connectionScore >= 0.6,
    totalExceeded: totalScore >= 2.0
  };
};