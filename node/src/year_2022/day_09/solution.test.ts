import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 09 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_09')
    })
})

describe('when motions are executed for the first time', () => {
    test('then number of tail positions visited at least once is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(13)
    })
})

describe('when motions are executed with a rope of 10 knots for the second time', () => {
    test('then number of tail positions visited at least once is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(1)
        expect(second(readInputSync(path.join(__dirname, 'sample2.txt')))).toEqual(36)
    })
})
