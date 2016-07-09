/**
 * return the factorial of an input
 * @param  {number} n
 */
export function factorial(n) {
  try {
    if (Number.isInteger(n)) {
      let result = 1;
      while (n > 1) {
        result *= n;
        n--;
      }
      return result;
    } else {
      throw new Error('Could not parse input');
    }
  } catch (err) {
    return null;
  }
}

/**
 * Format a string and attempt to calculate the mathematical evaluation
 * @param  {string} string from the display
 * @return {string} result of math calculation
 */
export function calculate(input, negated) {
  try {
    let processed = input.replace(/ /g, '');
    try {
      const count = processed.match(/\^/g).length;
      for (let i = 0; i < count; i++) {
        processed = processed.replace(/(.)[\^](.)/, ($1, $2, $3) => Math.pow($2, $3));
      }
    } catch (err) {}

    processed = processed.replace(/sqrt[(](\d+)[)]/g, 'Math.sqrt($1)')
    .replace(/&radic;(\d+)/g, 'Math.sqrt($1)')
    .replace(/(\d+)!/g, 'factorial($1)');

    processed = negated ? `-1*(${processed})` : processed;
    return eval(processed);
  } catch (err) {
    return null;
  }
}
