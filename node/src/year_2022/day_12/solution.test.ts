import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 12 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_12')
    })
})

describe('when heightmap is used for the first time', () => {
    test('then the fewest count of steps to reach the target point is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(31)
    })
})

describe('when heightmap is used  for the second time', () => {
    test('then the fewest count of steps to reach the target point is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(29)
    })
})
