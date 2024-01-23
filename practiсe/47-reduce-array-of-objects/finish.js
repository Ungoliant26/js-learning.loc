/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

/**
 * Создаём функцию popularPostsIds с двумя параметрами posts и minimalComentsQty
 * reduce содержит 2 аргумента
 *
 * 1 аргумент - callback функция с двумя параметрами (themePostsIds, themePost)
 * themePostsIds - аккумулирует значения путем передачи от одного вызова функции к другому
 * themePost - элемент массива posts
 * В теле функции возвращается обновлённое значение для параметра themePostsIds
 * С помощью тернарного оператора неявно возвращем результат выражения
 * В условии оператора проверяем кол-во комментариев в определённом посте
 * Метод concat берёт 2 массива, соединяет и возвращает новый
 * Новый массив будет новым значением для переменной themePostsIds
 * Если условие ложно, то возвращаем предыдущее значение themePostsIds
 *
 * 2 аргумент - начальное значение themePostsIds
 * значение будет передаваться следующему вызову callback функции
 * @param {Array} posts
 * @param {Number} minimalComentsQty
 * @returns результат метода reduce
 */

function popularPostsIds(posts, minimalComentsQty) {
  return posts.reduce(
    //Первый аргумент метода массивов reduce
    (themePostsIds, themePost) =>
      themePost.comments >= minimalComentsQty
        ? themePostsIds.concat([themePost.postId])
        : themePostsIds,
    //Второй аргумент
    []
  )
}

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []
