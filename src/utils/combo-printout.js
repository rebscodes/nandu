/**
 * Combo printout utilities for generating competition registration codes
 */

/**
 * Generate a printout string for competition registration from combos
 * @param {Array} combos - Array of combo objects
 * @returns {string} - Formatted combo codes string (e.g., "324A+6, 312A+335A, 323A+1")
 */
export const generateComboPrintout = (combos) => {
  if (!Array.isArray(combos)) {
    return '';
  }

  return combos.map(combo => {
    // Special handling for throw/catch combos
    if (combo.isThrowCatchCombo && combo.comboMovement?.coreMovementId) {
      return combo.comboMovement.coreMovementId + '+9'; // +9 represents the catch
    }
    
    const movements = combo.movements.filter(m => !m.isCombo); // Include stances (points: 0)
    const connections = combo.connections || [];
    
    if (movements.length === 0) return '';
    
    // For connected movements, build the connection chain
    if (connections.length > 0 && movements.length >= 2) {
      let printout = '';
      let processedMovements = new Set();
      
      for (let i = 0; i < movements.length; i++) {
        const movement = movements[i];
        
        // Skip if this movement was already processed as a connection target
        if (processedMovements.has(movement.id)) {
          continue;
        }
        
        printout += movement.id;
        processedMovements.add(movement.id);
        
        // Build the connection chain starting from this movement
        let currentMovement = movement;
        while (true) {
          const connection = connections.find(conn => conn.from === currentMovement.id);
          if (connection) {
            printout += '+' + connection.to;
            processedMovements.add(connection.to);
            
            // Find the next movement in the chain
            const nextMovement = movements.find(m => m.id === connection.to);
            if (nextMovement) {
              currentMovement = nextMovement;
            } else {
              break; // No more movements in the chain
            }
          } else {
            break; // No more connections
          }
        }
        
        // Add comma if there are more unprocessed movements
        const hasMoreMovements = movements.some(m => !processedMovements.has(m.id));
        if (hasMoreMovements) {
          printout += ', ';
        }
      }
      
      return printout;
    } else {
      // No connections, just list movements
      return movements.map(m => m.id).join(', ');
    }
  }).filter(combo => combo !== '').join(', ');
};