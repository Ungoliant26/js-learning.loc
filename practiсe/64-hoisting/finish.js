/** ЗАДАЧА 64 - Hoisting - процесс доступа к переменным до их определения
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10

if (b > a) {
  let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c)
  // 17
}

console.log(c) // переменная "с" доступна только в блоке кода if
// Uncaught ReferenceError: c is not defined
