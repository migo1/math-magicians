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

  it('performs addition operation correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const newState = calculate(initialState, '=');

    expect(newState).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('performs subtraction operation correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '-',
    };

    const newState = calculate(initialState, '=');

    expect(newState).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('performs division operation correctly', () => {
    const initialState = {
      total: '12',
      next: '4',
      operation: '÷',
    };

    const newState = calculate(initialState, '=');

    expect(newState).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  it('performs multiplication operation correctly', () => {
    const initialState = {
      total: '12',
      next: '4',
      operation: 'x',
    };

    const newState = calculate(initialState, '=');

    expect(newState).toEqual({
      total: '48',
      next: null,
      operation: null,
    });
  });
  // Add more test cases for different button inputs and expected outputs
  // based on the behavior of the calculate function.
});
