import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoBox from '../PhotoBox';

describe('PhotoBox Component', () => {
  it('renders the photo, name, title, and description', () => {
    const testProps = {
      avatar: 'avatar.jpg',
      name: 'John Doe',
      title: 'Software Developer',
      description: 'Programmer'
    };

    render(<PhotoBox {...testProps} />);


    const image = screen.getByRole('img', { name: /user avatar/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'avatar.jpg');

    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
    expect(screen.getByText('Programmer')).toBeInTheDocument();
  });
});
