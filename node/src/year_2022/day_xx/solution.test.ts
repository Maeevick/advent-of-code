import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when ...', () => {
    test('then ...', () => {
        expect(daily()).toEqual('day_xx')
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(0)
    })
})

describe('when ...', () => {
    test('then ...', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(0)
    })
})
