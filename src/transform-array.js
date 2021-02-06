const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next" || arr[i-1] == "--discard-next") {
      if (i + 1 == arr.length) return result;
      continue;
    }

    if (arr[i] == "--discard-prev"  ) {
      if (i == 0) continue;
      if (arr[i-2] == "--discard-next" ) continue;
      result.pop();
      continue;
    }

    if (arr[i] == "--double-next") {
      if (i + 1 == arr.length) return result;
      result.push(arr[i+1]);
      continue;
    }

    if (arr[i] == "--double-prev") {
      if (i == 0) continue;
      if (arr[i-2] == "--discard-next") continue;
      result.push(arr[i-1]);
      continue;
    }

    result.push(arr[i]);
  }
  return result;
}