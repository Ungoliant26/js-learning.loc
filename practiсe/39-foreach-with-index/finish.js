/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

/**
 *
 * @param {String} town значение элемента массива
 * @param {Number} i индекс эллемента
 * @returns неявно шаблонную строку с названием города и индекс в массиве
 */
const cityInfo = ({ town, i }) =>
  `${town} is at the index ${i} in the myCities array`

myCities.forEach((town, i) => console.log(cityInfo({ town, i }))) // выводит в шаблонную строку по порядку
// значение элемента массива и его индекс

/**
 * London is at the index 0 in the myCities array
New York is at the index 1 in the myCities array
Singapore is at the index 2 in the myCities array
 */
