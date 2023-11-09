import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from "../Info";

describe('Info Component', () => {

  it('renders the text passed to it', () => {
    render(<Info text="Test info text" />);
    expect(screen.getByText("Test info text")).toBeInTheDocument();
  });

  
  it('renders children when they are provided', () => {
    const childText = "Child content";
    render(
      <Info text="Test info text">
        <div>{childText}</div>
      </Info>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });


  it('renders correctly even without children', () => {
    render(<Info text="Test info text" />);
    expect(screen.getByText("Test info text")).toBeInTheDocument();
    expect(screen.queryByText("Child content")).not.toBeInTheDocument();
  });
});

