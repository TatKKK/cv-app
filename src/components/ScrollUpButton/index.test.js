import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ScrollUpButton from '../ScrollUpButton';

window.scrollTo = jest.fn();

describe('ScrollUpButton', () => {
  it('is not visible when scrolled less than 100px', () => {
    render(<ScrollUpButton icon={<span>Up</span>} />);
    expect(window.scrollY).toBeLessThan(100);
    expect(screen.queryByText('Up')).not.toBeInTheDocument();
  });

  it('becomes visible when scrolled more than 100px', () => {
    render(<ScrollUpButton icon={<span>Up</span>} />);
    // Simulate scrolling
    window.scrollY = 101;
    fireEvent.scroll(window);
    expect(screen.getByText('Up')).toBeInTheDocument();
  });

  it('scrolls to top when clicked', () => {
    render(<ScrollUpButton icon={<span>Up</span>} />);
    window.scrollY = 101;
    fireEvent.scroll(window);
    fireEvent.click(screen.getByText('Up'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});

