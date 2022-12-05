import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 05 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_05')
    })
})

describe('when after the operator moves crates for the first time', () => {
    test('then crates at the top of each stack are', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual('CMZ')
    })
})

describe('when after the operator moves crates for the second time', () => {
    test('then crates at the top of each stack are', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual('MCD')
    })
})
