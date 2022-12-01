import { readInputSync } from "../readInputSync"
import { daily, first, second } from "./solution"

describe('when day 2 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day 02 !')
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(first(readInputSync(`${__dirname}/sample.txt`))).toEqual('solve me')
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(second(readInputSync(`${__dirname}/sample.txt`))).toEqual('boilerplate')
    })
})