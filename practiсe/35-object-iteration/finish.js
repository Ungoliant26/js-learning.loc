/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "value1" или "value3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

console.log(Object.values(myObject))

Object.values(myObject).forEach((value) => {
  if (value == true || value == 'abc') {
    console.log(value)
  }
})
