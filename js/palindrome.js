function isStringWithoutSpaces(myString) {
  if (typeof myString !== "string" || !isNaN(myString)) {
    return new Error("Text not provided");
  } else {
    let myNewString = myString
      .replaceAll(/[.,:;()_?¿!¡-\s]/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    let reversedString = myNewString.split("").reverse().join("");

    if (reversedString === myNewString) {
      return "Es un palíndromo";
    } else {
      return "No es un palíndromo";
    }
  }
}

console.log(isStringWithoutSpaces("Holá qué tal"));
console.log(isStringWithoutSpaces("Holá qué tal"));
console.log(isStringWithoutSpaces("Holá qué tal"));
console.log(isStringWithoutSpaces("anas"));
console.log(isStringWithoutSpaces("aná"));
console.log(isStringWithoutSpaces("ana"));
console.log(isStringWithoutSpaces("ana__"));
console.log(isStringWithoutSpaces("a na__"));
console.log(isStringWithoutSpaces(""));
console.log(isStringWithoutSpaces(2324));
console.log(isStringWithoutSpaces("2432"));
