import { showAnswersForYearAndDay } from "../logAnswersForDay"

import { daily as day_01, first as first_01, second as second_01 } from "./day_01/solution"
import { daily as day_02, first as first_02, second as second_02 } from "./day_02/solution"

const SEPARATOR = `-`.repeat(32)
const YEAR = 'year_2022'

console.log(SEPARATOR)
console.log(`it's ${YEAR} advent of code`.toUpperCase())
console.log(SEPARATOR)

showAnswersForYearAndDay(YEAR, day_01(), first_01, second_01)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day_02(), first_02, second_02)