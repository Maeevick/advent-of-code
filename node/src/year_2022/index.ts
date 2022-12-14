import { showAnswersForYearAndDay } from '../logAnswersForDay'

import { daily as day01, first as first01, second as second01 } from './day_01/solution'
import { daily as day02, first as first02, second as second02 } from './day_02/solution'
import { daily as day03, first as first03, second as second03 } from './day_03/solution'
import { daily as day04, first as first04, second as second04 } from './day_04/solution'
import { daily as day05, first as first05, second as second05 } from './day_05/solution'
import { daily as day06, first as first06, second as second06 } from './day_06/solution'
import { daily as day07, first as first07, second as second07 } from './day_07/solution'
import { daily as day08, first as first08, second as second08 } from './day_08/solution'
import { daily as day09, first as first09, second as second09 } from './day_09/solution'
import { daily as day10, first as first10, second as second10 } from './day_10/solution'
import { daily as day11, first as first11, second as second11 } from './day_11/solution'
import { daily as day12, first as first12, second as second12 } from './day_12/solution'
import { daily as day13, first as first13, second as second13 } from './day_13/solution'
import { daily as day14, first as first14, second as second14 } from './day_14/solution'

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
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day07(), first07, second07)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day08(), first08, second08)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day09(), first09, second09)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day10(), first10, second10)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day11(), first11, second11)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day12(), first12, second12)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day13(), first13, second13)
console.log(SEPARATOR)
showAnswersForYearAndDay(YEAR, day14(), first14, second14)
