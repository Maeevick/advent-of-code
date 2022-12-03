import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 3 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_03')
    })
})

describe('when elves check priorities of items presents in each ruckracks for the first time', () => {
    test('then the sum of the priorities is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(157)
    })
})

describe('when elves check the badges presents in each ruckracks for the second time', () => {
    test('then the sum of badges priorities is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(70)
    })
})
