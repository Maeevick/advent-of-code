import { showAnswersForYearAndDay } from '../logAnswersForDay'

import { daily as day01, first as first01, second as second01 } from './day_01/solution'
import { daily as day02, first as first02, second as second02 } from './day_02/solution'
import { daily as day03, first as first03, second as second03 } from './day_03/solution'
import { daily as day04, first as first04, second as second04 } from './day_04/solution'
import { daily as day05, first as first05, second as second05 } from './day_05/solution'
import { daily as day06, first as first06, second as second06 } from './day_06/solution'

const SEPARATOR = '-'.repeat(32)
const YEAR = 'year_2022'

console.log(SEPARATOR)
console.log(`it's ${YEAR} advent of code`.toUpperCase())
console.log(SEPARATOR)

showAnswersForYearAndDay(YEAR, day01(), first01, second01)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day02(), first02, second02)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day03(), first03, second03)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day04(), first04, second04)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day05(), first05, second05)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day06(), first06, second06)
