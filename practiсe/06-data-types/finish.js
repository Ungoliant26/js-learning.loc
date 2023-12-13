/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const pText = 'String'
const pNum = 1
const pBool = true
const pNull = null
let pUnd // неявное объявление переменной короче
const pObject = {
  pName: 'Kirill',
  pAge: 23,
}
const pMass = [1, true, 'Test']

console.log(typeof pText)
console.log(typeof pNum)
console.log(typeof pBool)
console.log(typeof pNull)
console.log(typeof pUnd)
console.log(typeof pObject)
console.log(typeof pMass)
