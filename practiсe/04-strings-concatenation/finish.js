/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

// Вариант 1
const userName = 'Kirill'
const userSecondName = 'Royako'
const userProf = 'Engineer'
const userInfo1 =
  'Меня зовут ' + userName + ' ' + userSecondName + ' и я ' + userProf
console.log(userInfo1)

// Вариант 2 через шаблонные строки короче
const userInfo2 = `My name is ${userName} ${userSecondName} and I am ${userProf}`
console.log(userInfo2)
