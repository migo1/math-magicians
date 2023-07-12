import operate from '../operate';

describe('operate', () => {
  it('should correctly perform addition', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should correctly perform subtraction', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should correctly perform multiplication', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('should correctly perform division', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });

  it('should correctly perform modulo operation', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });
});
