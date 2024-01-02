/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const myTestArray = [0, 'null1', 'Test', false]
const myTestArrayNull = myTestArray.splice(1, 1, 'null2')

console.log(`Оригинальный массив: [${myTestArrayNull.join(', ')}]`)

myTestArray[1] = 9.99
console.log(`Изменённый массив: [${myTestArray.join(', ')}]`)
