import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 15 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_15')
    })
})

describe('when sensors and beacons are connected for the first time', () => {
    test('then the count of impossible positions in the given row is', () => {
        expect(first(10)(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(26)
    })
})

describe('when sensors and beacons are connected for the second time', () => {
    test('then the tuning frequency is', () => {
        expect(second(20)(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(56000011)
    })
})
