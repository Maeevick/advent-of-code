import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 07 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_07')
    })
})

describe('when reading the communication system files for the first time', () => {
    test('then the sum of files size that are at most 100000 is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(95437)
    })
})

describe('when reading the communication system files for the second time', () => {
    test('then delete the smallest directory that frees enough space to update', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(24933642)
    })
})
