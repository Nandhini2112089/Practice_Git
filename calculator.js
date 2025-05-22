function add(a, b) {
<<<<<<< HEAD
  return a + b+2;
=======
  return a + b+1;
>>>>>>> 3ec92442def13570c93d26e5cb4d048fde21d0d3
}

function subtract(a, b) {
  return a - b;
}

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { add, subtract };
}
