const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect == false) {
      this.isDirect = false;
    } else {
      this.isDirect = true;
    }
  }

  encrypt(message, key) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let m = message.toLowerCase().split('');
    let k = [];
    let result = [];

    if (message.length != key.length || k.length == 0) {
      let i = 0;
      let j = 0;
      while (m.length != k.length) {
  
        if (alphabet.indexOf(m[i]) > -1) {
          k.push(key[j].toLowerCase());
          i++;
          j++;
          if (j == key.length) {
            j = 0;
          }
        } else {
          k.push(m[i]);
          i++;
        }
      }
    }

    for (let i = 0; i < m.length; i++) {
      if (alphabet.indexOf(m[i]) > -1) {
      result.push(alphabet[(alphabet.indexOf(m[i]) + alphabet.indexOf(k[i])) % 26])
      } else {
        result.push(m[i]);
      }
    }
    
    if (this.isDirect) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    }
  }  

  decrypt(message, key) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let m = message.toLowerCase().split('');
    let k = [];
    let result = [];
    
    if (message.length != key.length || k.length == 0) {
      let i = 0;
      let j = 0;
      while (m.length != k.length) {
  
        if (alphabet.indexOf(m[i]) > -1) {
          k.push(key[j].toLowerCase());
          i++;
          j++;
          if (j == key.length) {
            j = 0;
          }
        } else {
          k.push(m[i]);
          i++;
        }
      }
    }

    for (let i = 0; i < m.length; i++) {
      if (alphabet.indexOf(m[i]) > -1) {
        result.push(alphabet[(alphabet.indexOf(m[i]) + 26 - alphabet.indexOf(k[i])) % 26])
      } else {
        result.push(m[i]);
      }
    }

    if (this.isDirect) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
