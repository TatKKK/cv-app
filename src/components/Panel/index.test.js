import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from '../Panel';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('Panel Component', () => {
  
  const mockOnCollapse = jest.fn();

  const renderPanel = (isCollapsed = false) =>
    render(
      <Router>
        <Panel isCollapsed={isCollapsed} onCollapse={mockOnCollapse} />
      </Router>
    );

  it('renders without crashing', () => {
    renderPanel();
    expect(screen.getByText('Tamar Kaldani')).toBeInTheDocument(); 
  });

  it('starts as not collapsed', () => {
    renderPanel();
    expect(screen.getByRole('navigation')).not.toHaveClass('collapsed');
  });

  beforeEach(() => {
    const main = document.createElement('div');
    main.id = 'main-inner';
    document.body.appendChild(main);
  });
  
  afterEach(() => {
    const main = document.querySelector('#main-inner');
    if (main) document.body.removeChild(main);
  });
  
  it('toggles collapse state on button click', () => {
    renderPanel();
    const toggleButton = screen.getByText('≡');
    fireEvent.click(toggleButton);
    const main = document.querySelector('#main-inner');
    expect(main.classList).toContain('nav-hide');
  });
  
 
});

