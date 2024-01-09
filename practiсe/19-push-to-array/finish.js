/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myTestArray = [22, true, 2.2, 'Test']

console.log(
  `Оригинальный массив: [${myTestArray.join(', ')}]; Длина: ${
    myTestArray.length
  }`
)

myTestArray.push('New', 6)

console.log(
  `Обновлённый массив: [${myTestArray.join(', ')}]; Длина: ${
    myTestArray.length
  }`
)
