import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NanduCalculator from '../NanduCalculator.jsx';
import { movements } from '../data/codes.js';
import { southernMovements } from '../data/southern-nandu-codes.js';
import { taijiMovements } from '../data/taiji-nandu-codes.js';

describe('NanduCalculator - Essential UI Tests', () => {
  let user;
  let mockSetSharedCombos;

  beforeEach(() => {
    user = userEvent.setup();
    mockSetSharedCombos = vi.fn();
  });

  const renderCalculator = (props = {}) => {
    return render(
      <NanduCalculator 
        sharedCombos={[]} 
        setSharedCombos={mockSetSharedCombos} 
        {...props} 
      />
    );
  };

  describe('Core Functionality', () => {
    it('should render without crashing', () => {
      renderCalculator();
      expect(screen.getByText('Nandu Calculator')).toBeInTheDocument();
    });

    it('should create and delete combos', async () => {
      renderCalculator();
      
      // Create combo
      await user.click(screen.getByText('✨ New Combo'));
      expect(screen.getByText('Combo #1')).toBeInTheDocument();
      
      // Delete combo
      const deleteButtons = screen.getAllByRole('button');
      const deleteButton = deleteButtons.find(button => 
        button.className.includes('text-red-500')
      );
      await user.click(deleteButton);
      
      // Should be gone
      expect(screen.queryByText('Combo #1')).not.toBeInTheDocument();
    });

    it('should switch between styles', async () => {
      renderCalculator();
      
      // Switch to Southern
      const southernButtons = screen.getAllByText('Southern');
      await user.click(southernButtons[0]);
      
      // Should show Southern movements (find one in the default 'Jumping' category)
      await waitFor(() => {
        const jumpingMovement = southernMovements.find(m => m.category === 'Jumping');
        if (jumpingMovement) {
          expect(screen.getByText(jumpingMovement.english)).toBeInTheDocument();
        }
      });
    });

    it('should clear combos when switching styles', async () => {
      renderCalculator();
      
      // Create combo in Northern
      await user.click(screen.getByText('✨ New Combo'));
      expect(screen.getByText('Combo #1')).toBeInTheDocument();
      
      // Switch to Southern - should be empty (combos are cleared)
      const southernButtons = screen.getAllByText('Southern');
      await user.click(southernButtons[0]);
      expect(screen.getByText('Drag a movement here to create your first combo!')).toBeInTheDocument();
      
      // Switch back to Northern - should still be empty (combos are cleared on style change)
      const northernButtons = screen.getAllByText('Northern');
      await user.click(northernButtons[0]);
      expect(screen.getByText('Drag a movement here to create your first combo!')).toBeInTheDocument();
    });

    it('should handle errors gracefully', () => {
      expect(() => renderCalculator()).not.toThrow();
    });
  });
});