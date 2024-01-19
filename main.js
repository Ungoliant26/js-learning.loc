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

//Строгий режим - запрещает использование необъявленных переменных

/* 'use strict'

function myStrict() {
  x = 10
  console.log(x)
}

myStrict()
console.log(x) */ //x is not defined

/* const myForm = {
  myName: 'Kirill',
  myAge: 33,
  myProf: {
    expProf: 14,
    mastery: 'Main Engineer',
  },
}

const myOptionsForm = {
  myHobbies: {
    gamePlay: true,
    driveCar: false,
  },
}

const mySummaryForm = {
  ...myForm,
  ...myOptionsForm,
}

console.table(mySummaryForm) */

/* const myName = 'Kirill'
const mySurName = 'Raevski'
const myAge = 33
const myInfo = `My name is ${myName} and my surname is ${mySurName}. I was born ${myAge} ago.`

console.log(myInfo) */

/* setTimeout(function () {
  console.log('Через 2 секунды')
}, 2000)
 */

/* const mathFunc = (number, multi = 2) => {
  return number * multi
}

console.log(mathFunc(5, 4)) //20
console.log(mathFunc(5)) //10 */

/* const myPost = (today, postIn = Date()) => {
  return {
    ...today,
    postIn,
  }
}

const todayPost = {
  idPost: 1,
  userName: 'Kirill',
}

console.table(myPost(todayPost)) */

/* const functionError = () => {
  throw new Error('Shit Error')
}

functionError()

console.log('Continue...')
 */

/* const functionError = () => {
  throw new Error('Shit Error') // вызывает срабатывание неопознанной ошибки
}

try {
  functionError() // пробуем вызвать функцию
} catch (error) { // ошибка будет присвоено как значение переменной (error)
  console.error(error) // метод вывода ошибок в консоль
  console.log(error.message) // у каждой ошибки есть свойство .message('Shit Error')
}

console.log('Continue...') // ловим ошибку блоком try/catch и код продолжает работу */

/* const myMass = new Array(4, true, 'Kirill')
const myMass1 = [4, true, 'Kirill']
console.log(myMass.length)
console.log(myMass1[0])

myMass.pop()
console.log(myMass)

const removedElem = myMass.pop()
console.log(removedElem) */

/* const myMass = [5, 10, 50]

const myMap = myMass.map((elem) => {
  return elem * 3
})
console.log(myMass)
console.log(myMap) */
/**
 * [ 5, 10, 50 ]
[ 2.5, 5, 25 ]
 */

/* const myTestInfo = {
  userName: 'Kirill',
  userAge: 33,
  userSex: 'Male',
}

const { userName, userAge, userSex } = myTestInfo

console.log(userName) // Kirill
console.log(userAge) // 33
console.log(userSex) // Male */

/* const carsArray = ['BMW', 'Mazda', 'Lada']
const [carOne, carTwo, carThree] = carsArray

console.log(carOne) // BMW
console.log(carTwo) // Mazda
console.log(carThree) // Lada */

// Деструктуризация массива

/* const myTestInfo = {
  userName: 'Kirill',
  userAge: 19,
  userSex: 'Male',
}

const userSubInfoAdmin = ({ userName, userSex }) => {
  if (userName != 'Kirill' || userSex != 'Male') {
    return `The user ${userName} is not an admin and his gender a ${userSex}`
  }
  return `Welcome admin man ${userName}`
}

const userSubInfoAgeGender = ({ userName, userAge }) => {
  if (userAge <= 18) {
    return `The user ${userName} is not adult. Go home child!`
  }
  return `Welcome adult ${userName}!`
}

console.log(userSubInfoAdmin(myTestInfo)) // The user Tommy is not an admin and his gender a Male
console.log(userSubInfoAgeGender(myTestInfo)) // The user Tommy is not adult. Go home child! */

/* const myInfo = {
  myName: 'Kirill',
  myAge: 33,
}

if (!myInfo.myName && myInfo.myName != false) {
  console.log('Нет имени')
}

if (typeof myInfo.myName == 'number' || typeof myInfo.myName === 'boolean') {
  console.log('Некорректное имя')
}

if (typeof myInfo.myName == 'string') {
  console.log(`Имя пользователя: ${myInfo.myName}`)
} */

/* const sumPlusNumbers = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Один из аргументов не является числом'
  }

  if (x <= 0 || y <= 0) {
    return 'Одно из чисел равно или меньше 0'
  }

  return x + y
}

console.log(sumPlusNumbers(10, 5)) */

/* const adminName = 'Kirill'
const userName = 'Kirill'

switch (userName) {
  case 'Kirill':
    console.log('Привет админ!')
    break
  case 'Oleg':
    let x = 10
    x += 10
    console.log(x)
    break
  case 'Joe':
    console.log(`Hello ${adminName} this is Joe. You friend!`)
    break
  default:
    console.log(Error('Attention! Intruder!'))
} */

/* const testArray = [1, true, 'Kir']

testArray.forEach((elem, index) => {
  console.log(`Элемент массива: ${elem}. Индекс в массиве: ${index}`)
}) */

/* let myPerem = 0

while (myPerem < 5) {
  console.log(myPerem)
  myPerem++
} */
/* 
let myI = 0
do {
  console.log(myI)
  myI++
} while (myI < 5) */

/* const testObject = {
  firstP: true,
  secondP: 'Kir',
  thirdP: 22,
}

for (const key in testObject) {
  console.log(key, testObject[key])
} */

/* const testMessage = 'Hello my dear user. Hello my darling'

for (const message of testMessage) {
  if (message == 'H' || message == 'u') {
    console.log(message)
  }
} */

/* class Comment {
  constructor(text) {
    this.text = text
    this.votes = 0
  }

  upvote() {
    this.votes += 1
  }

  static myMergeComments(one, two) {
    // Метод static доступен как свойства класса
    // Метод Конкатенация(объединения) строк
    return `${one} ${two}`
  }
}

Comment.myMergeComments('One comment', 'Two comment') */

/**
 * Расширяем класс массив
 *
 */

/* class testArray extends Array {
  mySum() {
    return this.reduce((i, accum) => (accum += i), 0) // суммируем элементы массива
    // i - элемент массива, accum - переменная, которая изменяется в процессе итерации по массиву
  }
}

const myTestArr = new testArray(10, 20, 30, 40)

console.log(myTestArr.mySum()) // 100 */
