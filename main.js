/* const myInfo = {
  nameUser: 'Kirill',
  ageUser: 33,
}

function sumName(myInfoSum) {
  const updateMyInfo = JSON.parse(JSON.stringify(myInfoSum)) //создаём новую копию объекта
  updateMyInfo.ageUser += 10
  return updateMyInfo
}

const updateMyInfoFull = sumName(myInfo) // присваиваем переменной новый объект

console.log(myInfo.ageUser) // 33. Объект myInfo не изменился. Меняем только копию объекта.
console.log(updateMyInfoFull.ageUser) //43
 */

/* function setMyNumber() {
  console.log(Math.random())
}
console.log('Start')
setTimeout(setMyNumber, 2000) */

/* const x = 10
function myFn() {
  function yourFn() {
    console.log(x)
  }
  yourFn()
}
myFn() // 10 */
/**
 * Вызываем функцию из глобальной области видимости myFn().
 * Создается область видимости функции myFn и в ней создается переменная yourFn
 * Вызываем функцию yourFn в области видимости функции myFn
 * Создается новая область видимости функции yourFn
 * Получаем результат выражения console.log(x)
 * --Создаём цепочку областей видимости
 */

// Жизненный цикл переменной x //
/* let x // 1. Объявление 'x' в глобальной области видимости. Её значение undefined
let y
function myFunc() {
  let y
  x = true
  /**
   * 3. Объявлена ли 'x' в зоне видимости функции myFunc? НЕТ!
   * Объявлена ли 'x' в глобальной области видимости? ДА!
   * Тогда присваиваем значение true глобальной переменной 'x'
   */
/*  y = 20
  console.log(y) // 5. 'y' имеет значение 20 в области видимости функции
}

myFunc() // 2. Вызов функции
console.log(x) // 4. 'x' имеет значение true
console.log(y)  */

//Строгий режим

'use strict'

function myStrict() {
  x = 10
  console.log(x)
}

myStrict()
console.log(x)
