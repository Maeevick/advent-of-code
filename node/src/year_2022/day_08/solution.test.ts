import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 08 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_08')
    })
})

describe('when elves count visible trees for the first time', () => {
    test('then the total of visible trees is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(21)
    })
})

describe('when elves evaluate scenic score for the second time', () => {
    test('then the best score will be', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(8)
    })
})
