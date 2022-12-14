import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 01 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_01')
    })
})

describe('when the elves enter in the jungle for the first time', () => {
    test('then the elf carrying the most, carries (in calories)', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(24000)
    })
})

describe('when the elves enter in the jungle for the second time', () => {
    test('then the 3 elves carrying the most, carries a total of (in calories)', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(45000)
    })
})
