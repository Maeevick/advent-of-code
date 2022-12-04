import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 4 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_04')
    })
})

describe('when elves clean the camp for the first time', () => {
    test('then the number of fully overloaped sections by one elf of the pair is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(2)
    })
})

describe('when elves clean the camp for the second time', () => {
    test('then the number of overloaped sections by one elf of the pair is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(4)
    })
})
