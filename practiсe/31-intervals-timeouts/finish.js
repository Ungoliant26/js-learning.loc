/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// мой кривое решение
/* const myInterval1 = setInterval(function oneMessage() {
  console.log('Сообщение номер 1')
}, 2000)

setTimeout(() => {
  clearInterval(myInterval1)
}, 2000)

const myInterval2 = setInterval(function oneMessage() {
  console.log('Сообщение номер 2')
}, 4000)

setTimeout(() => {
  clearInterval(myInterval2)
}, 4000)

const myInterval3 = setInterval(function oneMessage() {
  console.log('Сообщение номер 3')
}, 6000)

setTimeout(() => {
  clearInterval(myInterval3)
}, 6000)

const myInterval4 = setInterval(function oneMessage() {
  console.log('Сообщение номер 4')
}, 8000)

setTimeout(() => {
  clearInterval(myInterval4)
}, 8000)

const myInterval5 = setInterval(function oneMessage() {
  console.log('Сообщение номер 5')
}, 10000)

setTimeout(() => {
  clearInterval(myInterval5)
}, 10000) */

// решение учителя

let myTimer = 1

const myIntervalId = setInterval(() => {
  console.log('Сообщение номер ' + myTimer)
  myTimer += 1
}, 1000)

setTimeout(() => clearInterval(myIntervalId), 6000)
