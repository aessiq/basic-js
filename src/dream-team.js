const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let j = 0;
      while (members[i][j] == " ") j++;
      result.push(members[i][j].toUpperCase());
    }
  }
  return result.sort().join('');
};
