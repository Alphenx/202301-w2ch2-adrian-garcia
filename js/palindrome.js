function isPalindrome(myString) {
  if (typeof myString !== "string" || !isNaN(myString)) {
    return new Error("Text not provided");
  } else {
    let myNewString = myString
      .replaceAll(/[.,:;()_?¿!¡-\s]/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    let reversedString = myNewString.split("").reverse().join("");

    return reversedString === myNewString;
  }
}

console.log(isPalindrome("Holá qué tal"));
console.log(isPalindrome("Holá qué tal"));
console.log(isPalindrome("Holá qué tal"));
console.log(isPalindrome("anas"));
console.log(isPalindrome("aná"));
console.log(isPalindrome("ana"));
console.log(isPalindrome("ana__"));
console.log(isPalindrome("a na__"));
console.log(isPalindrome(""));
console.log(isPalindrome(2324));
console.log(isPalindrome("2432"));
