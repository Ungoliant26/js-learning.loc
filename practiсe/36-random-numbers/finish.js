/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000 // Минимальное число при случайной генерации
const MAX = 9999 // Максимальное число при случайной генерации

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351] // Данный массив, с которым будет сравниваться генерация числа
/**
 * Стрелочная функция генерации случайного числа с параметрами(аргументами)
 * MIN и MAX - диапазон генерации числа
 * @param {Number} MIN
 * @param {Number} MAX
 * @returns {Number} случайно сгенерированное число
 */
const randomNumber = (MIN, MAX) => {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
}

/**
 * 1. Внутри функции сначала создаём переменную
 * newRandNum(ей присваиваются случайно сгенерированные числа)
 * 2. Затем создаём копию массива updatedArr,
 * чтобы не менять внешнюю переменную(ориг.массив)
 * 3. В цикле do ... while(для того, чтобы сгенерировать числа хотя бы один раз)
 * выполняем генерацию случайного числа
 * 4. Заносим в updatedArr уникальное сгенерированное число и
 * возвращаем новый массив с этим числом
 * @param {Array} array
 * @param {Number} MIN
 * @param {Number} MAX
 * @returns {Array} возвращает обновлённый массив с уникальным числом,
 * которого нет в исходном массиве
 */

const addRandNumToArr = (array, MIN, MAX) => {
  let newRandNum // объявляем переменную для записи сгенерированного числа
  const updatedArr = [...array] // Копируем оригинальный массив

  do {
    newRandNum = randomNumber(MIN, MAX) // Генерируем случайное число в цикле
    // console.log(newRandNum) // Чтобы увидеть сколько раз уникальное число было сгенерировано
  } while (updatedArr.includes(newRandNum))
  /**                     ^
   * Пока сгенерированное число есть в массиве
   * мы генерируем новое число, до тех пор, пока
   * оно не станет уникальным. Тогда выходим их цикла.
   */
  updatedArr.push(newRandNum)
  return updatedArr
}
/**
 * Вызываем функицю addRandNumToArr и передаём
 * три аргумента: новый массив и минимальное и максимальное
 * значения для генерации случайного числа.
 * Функция возвращает обновленный массив, который будет виден в
 * глобальной области видимости
 */
const updatedArr = addRandNumToArr(myNumbers, MIN, MAX)

console.log(`Оригинальный массив:[${myNumbers}]`) // Вывод оригинального массива
console.log(`Обновлённый массив: [${updatedArr}]`) // Вывод обновлённого массива с уникальным числом
