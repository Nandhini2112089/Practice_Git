function add(a, b) {
  return a + b+1;
}

function subtract(a, b) {
  return a - b;
}

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { add, subtract };
}
