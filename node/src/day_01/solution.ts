import { readInputSync } from "../readInputSync"

export const daily = () => 'day 1 !'

const getCaloriesPerElf = (data: string) => {
    return data
        .split('\n\n')
        .map(i => {
            return i.split('\n')
                .map(Number)
                .reduce((a, c) => c + a, 0)
        })
}

export const first = (data: string) => {
    return Math.max(...getCaloriesPerElf(data))
}
console.log(daily(), 'first answer is :', first(readInputSync(`${__dirname}/data.txt`)))

export const second = (data: string) => {
    return getCaloriesPerElf(data).sort((a, b) => b - a).slice(0,3).reduce((a, c) => c + a, 0)
}
console.log(daily(), 'second answer is :', second(readInputSync(`${__dirname}/data.txt`)))
