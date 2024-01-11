/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // выражение-инструкция

// const myObject - инструкция
// сам объект - выражение
const myObject = {
  x: 10,
  y: true,
}

// выражение-инструкция
myObject.z = 'abc' // <-- 'abs'- выражение

delete myObject.x // выражение-инструкция

let newVariable // инструкция

// выражение-инструкция
newVariable = 30 + 5 // --> 30+5 - выражение

// выражение-инструкция
console.log(newVariable)
/**             ^
 *          выражение
 */

// if - инструкция
if (newVariable > 10) {
  /**         ^
   *      выражение
   *
   *выражение-инструкция
   *        ∨
   */
  console.log(`${newVariable} больше 10`) // <-- newVariable - выражение
  /**           __________________________
   *                        ^
   *                    выражение
   */
}
