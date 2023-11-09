import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from '../Navigation';
import '@testing-library/jest-dom';

describe('Navigation Component', () => {

  const renderNavigation = () => {
    return render(
      <Router>
        <Navigation />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderNavigation();
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('contains all the navigation links with correct text', () => {
    renderNavigation();
    const linkTexts = ['About Me', 'Education', 'Experience', 'Skills', 'Portfolio', 'Contacts', 'Feedback'];
    linkTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });


  it('includes an icon for each link', () => {
    renderNavigation();
    expect(screen.getAllByTestId('FontAwesomeIcon').length).toBeGreaterThanOrEqual(7);
  });

});
