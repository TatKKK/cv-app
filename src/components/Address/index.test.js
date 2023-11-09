import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from '../Address';

test('renders the Address component', () => {
  render(<Address />);


  const addressComponent = screen.getByTestId('address-component');
  expect(addressComponent).toBeInTheDocument();

});

test('renders FontAwesome icons', () => {
  render(<Address />);

  const envelopeIcon = screen.getByTestId('fa-envelope');
  const phoneIcon = screen.getByTestId('fa-phone');
  const linkedinIcon = screen.getByTestId('fa-linkedin');
  const facebookIcon = screen.getByTestId('fa-facebook');
  const gitlabIcon = screen.getByTestId('fa-gitlab');

  expect(envelopeIcon).toBeInTheDocument();
  expect(phoneIcon).toBeInTheDocument();
  expect(linkedinIcon).toBeInTheDocument();
  expect(facebookIcon).toBeInTheDocument();
  expect(gitlabIcon).toBeInTheDocument();
});

test('renders the Address component with custom email', () => {
    const customEmail = "mailto:kaldani.tata@gmail.com";
    render(<Address email={customEmail} />);
  
    const emailLink = screen.getByTestId('email-link');
    expect(emailLink).toHaveAttribute('href', customEmail);
  });
  
test('renders the Address component with a different GitLab link', () => {
  const customGitLabLink = 'https://gitlab.com/kaldani.tata';
  render(<Address gitlabLink={customGitLabLink} />);

  const gitlabLink = screen.getByTestId('gitlab-link');
  expect(gitlabLink).toHaveAttribute('href', customGitLabLink);
});

test('renders the Address component with a different phone link', ()=>{
    const customPhoneLink = "tel:(+995)599040491";
    render(<Address phoneLink={customPhoneLink}/>);

    const phoneLink = screen.getByTestId('phone-link');
    expect(phoneLink).toHaveAttribute('href', customPhoneLink);
})

test('renders the Address component with a different LinkedIn link', () => {
    const customLinkedinLink = 'https://www.linkedin.com/in/tamar-kaldani-874082165/';
    render(<Address customLinkedinLinkk={customLinkedinLink} />);
  
    
    const linkedinLink = screen.getByTestId('linkedin-link');
    expect(linkedinLink).toHaveAttribute('href', customLinkedinLink);
  });

  test('renders the Address component with a different Facebook link', () => {
    const customFacebookLink = "https://www.facebook.com/tata.kaldani/";
    render(<Address customFacebookLink={customFacebookLink} />);
  
    const facebookLink = screen.getByTestId('facebook-link');
    expect(facebookLink).toHaveAttribute('href', customFacebookLink);
  });
  
