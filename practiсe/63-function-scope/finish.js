/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b = 2
let d = 15

function myFn1(a) {
  function myFn2(a) {
    let c = 5
    console.log(a, b, c, d)
  }
  let b
  let d = 10
  myFn2(b)
}

myFn1() // undefined undefined 5 10
