import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 13 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_13')
    })
})

describe('when comparing distress signal packets for the first time', () => {
    test('then the sum of indices of packets in the right order is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(13)
    })
})

describe('when sorting packets in the right order for the second time', () => {
    test('then the product of divider packets indices is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(140)
    })
})
