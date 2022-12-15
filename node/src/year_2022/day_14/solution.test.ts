import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 14 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_14')
    })
})

describe('when the sand falls for the first time', () => {
    test('then number of units before infinite flowing is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(24)
    })
})

describe('when the sand falls for the second time', () => {
    test('then number of units before source is blocked is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(93)
    })
})
