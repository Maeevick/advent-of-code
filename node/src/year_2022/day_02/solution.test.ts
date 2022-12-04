import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 02 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_02')
    })
})

describe('when I compute my score following the guide for the first time', () => {
    test('then I have the points count', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(15)
    })
})

describe('when I compute my score following the guide for the second time', () => {
    test('then I have the points count', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(12)
    })
})
