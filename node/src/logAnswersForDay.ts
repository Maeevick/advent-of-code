import path from 'node:path'
import { readInputSync } from './readInputSync'

type Func2Any = (path: string) => any

const buildPathToDataForDay = (year: string, day: string) => path.join(__dirname, year, day, 'data.txt')

export const showAnswersForYearAndDay = (year: string, day: string, first: Func2Any, second: Func2Any) => {
    console.log(year, day, 'first answer is :', first(readInputSync(buildPathToDataForDay(year, day))))
    console.log(year, day, 'second answer is :', second(readInputSync(buildPathToDataForDay(year, day))))
}
