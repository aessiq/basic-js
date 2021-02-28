const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      let depth = 1;
      if (Array.isArray(arr[i])) {
        depth += this.calculateDepth(arr[i]);
        if (depth > result) {
          result = depth;
        }
      }
    }
    return result;
  }
};

// [1, 2, 3, [8, [2]], 4, 5, []]), 3);