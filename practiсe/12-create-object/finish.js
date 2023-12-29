/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const testObject = {
  myName: 'Kirill',
  mySurname: 'Raevski',
  myFavoriteNumber: 7,
}

const myInfo = `My name is ${testObject.myName} ${testObject.mySurname} and my favorite number is ${testObject.myFavoriteNumber}`

console.log(myInfo)
