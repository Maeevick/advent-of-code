import { readInputSync } from "../readInputSync"
import { daily, first, second } from "./solution"

describe('when day 1 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day 1 !')
    })
})

describe('when the elves enter in the jungle', () => {
    test('then the elf carrying the most, carries (in calories)', () => {
        expect(first(readInputSync(`${__dirname}/sample.txt`))).toEqual(24000)
    })
})

describe('when the elves enter in the jungle', () => {
    test('then the 3 elves carrying the most, carries a total of (in calories)', () => {
        expect(second(readInputSync(`${__dirname}/sample.txt`))).toEqual(45000)
    })
})