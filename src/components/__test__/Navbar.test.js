import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have correct navigation links', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Calculator')).toBeInTheDocument();
    expect(getByText('Quote')).toBeInTheDocument();
  });

  // Add more test cases to cover other interactions and expected outcomes
});
