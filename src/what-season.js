const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return "Unable to determine the time of year!"; 
  if (Object.prototype.toString.call(date) != '[object Date]') throw new Error();
  let result = date.getMonth();
  if (result == 11 || result <= 1 ) return "winter";
  if (result <= 4 ) return "spring";
  if (result <= 7 ) return "summer";
  if (result <= 10 ) return "fall";
};
