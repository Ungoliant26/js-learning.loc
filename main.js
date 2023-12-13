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

function setMyNumber() {
  console.log(Math.random())
}
console.log('Start')
setTimeout(setMyNumber, 2000)
