// Escribe una función llamada strictEquals(valueA, valueB)
// que devuelva el mismo valor que valueA === valueB.
// Tu implementación no puede usar los operadores === ni !==,
// ni nigún operador de comparacion

// Testea la función con este set de pruebas:

// Dada la función strictEquals
// Cuando se comparan <valueA> y <valueB>
// Entonces el resultado será <Result>

function areBothValuesNaN(valueA, valueB) {
  return Number.isNaN(valueA) && Number.isNaN(valueB);
}

function areIntegers(valueA, valueB) {
  return Number.isInteger(valueA) && Number.isInteger(valueB);
}

function isStrictZero(valueA, valueB) {
  return areIntegers(valueA, valueB) && !valueA && !valueB;
}

function strictEquals(valueA, valueB) {
  return (
    (Object.is(valueA, valueB) && !areBothValuesNaN(valueA, valueB)) ||
    isStrictZero(valueA, valueB)
  );
}

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "Oil"));
