import { readInputSync } from "../readInputSync"
import { daily, first, second } from "./solution"

describe('when ...', () => {
    test('then ...', () => {
        expect(daily()).toEqual('day xx !')
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(first(readInputSync(`${__dirname}/sample.txt`))).toEqual('boilerplate')
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(second(readInputSync(`${__dirname}/sample.txt`))).toEqual('boilerplate')
    })
})