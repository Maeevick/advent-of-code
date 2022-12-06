import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 06 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_06')
    })
})

describe('when the elves communication system buffer arrives for the first time', () => {
    test('then the first start marker is detected after a character count equals to', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(7)
    })
})

describe('when the elves communication system buffer arrives for the second time', () => {
    test('then the first message marker is detected after a character count equals to', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(19)
    })
})
