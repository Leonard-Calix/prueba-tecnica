const Calculator = require('./index');

test('Given the user input is empty when calculating the sum then it should return zero', () => {
  const calc = new Calculator();
  const result = calc.sum();

  expect(result).toBe(0);
});

test('Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)', () => {
    const calc = new Calculator();
    const result = calc.sum('3');
  
    expect(result).toBe(3);
});

test('Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)', () => {
    const calc = new Calculator();
    const result = calc.sum('1,2');
  
    expect(result).toBe(3);
});

test('Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)', () => {
    const calc = new Calculator();
    const result = calc.sum('1,2,3');
  
    expect(result).toBe(6);
});

test('Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)', () => {
    const calc = new Calculator();
    const result = calc.sum('1\n2,3');
  
    expect(result).toBe(6);
});

test('Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)', () => {
    const calc = new Calculator();
    const result = calc.sum('//;\n1;2');

    /* 
    
    //%\n1%2%3,4\n5

    \n1%2%3,4\n5
    
    */
  
    expect(result).toBe(3);
});
