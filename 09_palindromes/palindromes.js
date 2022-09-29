const palindromes = function (string) {
    // get rid of any punctuation
    var regex = /[\W_]/g;
    cleanedString = string.replace(regex, '');
    // lowercase the string
    lowerCasedString = cleanedString.toLowerCase();
    // reverse the string
    reversedString = lowerCasedString.split("").reverse().join("");
    // check if matches palindrome + length
    var len = reversedString.length;
    for (var i = 0; i < len/2; i++) {
      if (reversedString[i] !== reversedString[len - 1 - i]) {
          return false;
      }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
