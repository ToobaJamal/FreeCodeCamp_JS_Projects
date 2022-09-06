function palindrome(str) {
    let pattern = /[\W\s_]+/g
    let strProcessed = str.replace(pattern, "").toLowerCase().split('')
    return strProcessed.join("") === strProcessed.reverse().join("")
    }

palindrome("eye");
