/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// const b = [...a] Option 1 - сохраняет внутренние ссылки
// const b = Array.from(a) Option 2 - сохраняет внутренние ссылки
// const b = JSON.parse(JSON.stringify(a)) Option 3 - глубокая копия массива или объекта

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
