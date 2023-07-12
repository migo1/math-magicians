import calculate from '../calculate';

describe('calculate', () => {
  it('should handle AC button and reset the calculator data object', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(obj, 'AC')).toEqual(expected);
  });

  // Add more test cases for different button inputs and expected outputs
  // based on the behavior of the calculate function.
});
