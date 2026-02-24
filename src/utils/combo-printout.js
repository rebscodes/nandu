/**
 * Combo printout utilities for generating competition registration codes
 */

/**
 * Parse a combo code string back into combo objects
 * @param {string} codeString - e.g. "312A+6, 324A+335A, 445A+9"
 * @param {Array} currentMovements - movements array for the active style
 * @param {Array} currentConnections - connections array for the active style
 * @returns {{ combos: Array, errors: string[] }}
 */
export const parseComboCode = (codeString, currentMovements, currentConnections) => {
  if (!codeString || !codeString.trim()) return { combos: [], errors: [] };

  const errors = [];
  const combos = [];
  const baseId = Date.now();

  const chains = codeString.split(',').map(s => s.trim()).filter(s => s.length > 0);

  for (const chain of chains) {
    const ids = chain.split('+').map(s => s.trim().toUpperCase());

    // Throw/catch combo: last token is '9'
    if (ids[ids.length - 1] === '9') {
      const coreId = ids[ids.length - 2];
      if (!coreId) {
        errors.push(`Invalid throw/catch code: "${chain}"`);
        continue;
      }

      const comboMovement = currentMovements.find(m => m.isCombo && m.coreMovementId === coreId);
      if (!comboMovement) {
        errors.push(`No throw/catch combo found for movement "${coreId}"`);
        continue;
      }

      const throwMovement = currentMovements.find(m => m.id === 'THROW');
      const coreMovement = currentMovements.find(m => m.id === coreId);
      const catchMovement = currentMovements.find(m => m.id === 'CATCH');

      if (!throwMovement || !coreMovement || !catchMovement) {
        errors.push(`Missing throw/catch movement data for "${coreId}"`);
        continue;
      }

      combos.push({
        id: baseId + combos.length,
        movements: [throwMovement, coreMovement, catchMovement],
        connections: [],
        expanded: true,
        isThrowCatchCombo: true,
        fixedScore: comboMovement.points - coreMovement.points,
        comboMovement,
      });
      continue;
    }

    // Regular combo
    const movementObjects = [];
    let hasError = false;

    for (const id of ids) {
      const movement = currentMovements.find(m => m.id === id);
      if (!movement) {
        errors.push(`Unknown movement code: "${id}"`);
        hasError = true;
        break;
      }
      movementObjects.push(movement);
    }

    if (hasError || movementObjects.length === 0) continue;

    // Auto-detect connections between consecutive movements
    const connectionObjects = [];
    for (let i = 0; i < movementObjects.length - 1; i++) {
      const conn = currentConnections.find(
        c => c.from === movementObjects[i].id && c.to === movementObjects[i + 1].id
      );
      if (conn) connectionObjects.push(conn);
    }

    combos.push({
      id: baseId + combos.length,
      movements: movementObjects,
      connections: connectionObjects,
      expanded: true,
    });
  }

  return { combos, errors };
};

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