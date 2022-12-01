import { readInputSync } from "../readInputSync"

export const daily = () => 'day xx !'

export const first = (data: string) => {
    return 'boilerplate'
}

console.log(daily(), 'first answer is :', first(readInputSync(`${__dirname}/data.txt`)))

export const second = (data: string) => {
    return 'boilerplate'
}

console.log(daily(), 'second answer is :', second(readInputSync(`${__dirname}/data.txt`)))