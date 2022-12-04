import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 05 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_05')
    })
})

describe('when ... for the first time', () => {
    test('then ...', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(0)
    })
})

describe('when ... for the second time', () => {
    test('then ...', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(0)
    })
})
