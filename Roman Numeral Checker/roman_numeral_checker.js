function convertToRoman(numToConvert) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  nums.forEach(function(num, i) {
     while (numToConvert >= num) {
       result += roman[i];
       numToConvert -= num;
     }
  });

  return result;
}

convertToRoman(36);
