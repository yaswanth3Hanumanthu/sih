import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders home page link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // Check if the Home link is present
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders dashboard page link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  
  const dashboardLink = screen.getByText(/dashboard/i);
  expect(dashboardLink).toBeInTheDocument();
});

test('renders profile page link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
 
  const profileLink = screen.getByText(/profile/i);
  expect(profileLink).toBeInTheDocument();
});
