/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myString = 'Test message'
console.log(myString instanceof String)
console.log(`Тип переменной myString - ${typeof myString}`)

const myStringUpper = myString.toUpperCase() // вызов метода экземпляра string
console.log(myStringUpper) // TEST MESSAGE

// Создание экземпляра String

/* const myTest = new String('Kirill')
console.log(myTest instanceof String)
console.log(typeof myTest) */
