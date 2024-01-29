/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  // функция. Можем присвоить другое значение.
  return a + b
}

/* firstFunction = '3232fff'
console.log(firstFunction) */

const secondFunction = function (a, b) {
  // анонимное функциональное выражение. New value can't be assigned.
  return a + b
}

/* console.log(secondFunction(1, 2)) */
