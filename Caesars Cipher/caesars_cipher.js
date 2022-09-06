function rot13(str) {
  let newStr = ""
  let letters = [ 'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z' ]

 for(let i=0; i<str.length; i++) {
      if(letters.includes(str[i])) {
         let charIndex = letters.indexOf(str[i])
         newStr+=letters[charIndex + 13] || letters[charIndex - 13]
    }
     else {
         newStr+=str[i]
    }
    
}
return newStr
}

rot13("SERR PBQR PNZC");
