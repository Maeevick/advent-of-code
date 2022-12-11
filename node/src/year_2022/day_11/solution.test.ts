import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 11 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_11')
    })
})

describe('when monkeys play with items for the first time', () => {
    test('then the two most actives monkeys, the level of monkey business after 20 rounds is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(10605)
    })
})

describe('when monkeys play with items for the second time', () => {
    test('then the two most actives monkeys, the level of monkey business after 10_000 rounds ', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(2713310158)
    })
})
