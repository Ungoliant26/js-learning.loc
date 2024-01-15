/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'BMW',
    price: 12000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Mazda',
    price: 23000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Lada',
    price: 10,
    isAvailableForSale: true,
  },
]

const newCar = {
  carBrand: 'Saab',
  price: 90000,
  isAvailableForSale: false,
}

cars.push(newCar)

console.log(cars[0].carBrand)
