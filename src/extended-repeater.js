const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let add = [];
  if (options.repeatTimes == undefined && str) {
    result.push(String(str));
  } else {
      for (let i = 0; i < options.repeatTimes; i++) {
      result.push(String(str));
    }
  }

  if (options.additionRepeatTimes == undefined && options.addition) {
    add.push(String(options.addition));
  } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
      add.push(String(options.addition));
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (!options.additionSeparator) {
      result[i] = result[i] + add.join("|");
    } else {
      result[i] = result[i] + add.join(options.additionSeparator);
    }
  }

  if (!options.separator) {
    return result.join("+");
  } else {
    return result.join(options.separator);
  }
};
  