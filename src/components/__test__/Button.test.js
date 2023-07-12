import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('should render correctly with button text and color', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button btn="7" color="rgb(221, 213, 213)" handleClick={handleClick} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with an RGB color', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button btn="3" color="rgb(221, 213, 213)" handleClick={handleClick} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call the handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button btn="5" color="rgb(221, 213, 213)" handleClick={handleClick} />,
    );
    const button = getByText('5');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
