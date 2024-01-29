/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((mySum, myNumber) => mySum + myNumber, 0)
  }
  onlyNumbers() {
    return this.filter((myElement) => typeof myElement === 'number')
  }
}

const testExtendedArray = new ExtendedArray(1, 2, 3)

console.log(testExtendedArray)

console.log(`Сумма всех элементов массива: ${testExtendedArray.sum()}`)

const testExtendedArraySecond = new ExtendedArray('Hello ', 'World', 5)

console.log(`Числа в массиве: ${testExtendedArraySecond.onlyNumbers()}`)

testExtendedArraySecond.forEach((testEl) => console.log(testEl))
