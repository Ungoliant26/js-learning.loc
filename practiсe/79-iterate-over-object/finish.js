/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 30,
}

/* const sumObjectValues = (objectNumbers) => {
  let objectSum = 0
  Object.entries(objectNumbers).forEach((objectKey) => {
    if (typeof objectNumbers[objectKey] === 'number') {
      objectSum += objectNumbers[objectKey]
    }
  })
  return objectSum
} */

const sumObjectValues = (objectNumbers) => {
  Object.keys(objectNumbers).reduce((objectSum, objectNum) => {
    if (typeof objectNum[objectNumbers] === 'number') {
      objectSum += objectNum[objectNumbers]
    }
  }, 0)
  return objectNum
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
