import path from 'node:path'
import { readInputSync } from '../../readInputSync'
import { daily, first, second } from './solution'

describe('when day 10 opens', () => {
    test('then I start to code', () => {
        expect(daily()).toEqual('day_10')
    })
})

describe('when the signal strenght is mesured after 220 cycles for the first time', () => {
    test('then the sum of signal streght is', () => {
        expect(first(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(13140)
    })
})

describe('when CRT draws pixel following CPU instructions for the second time', () => {
    test('then the final screen is', () => {
        expect(second(readInputSync(path.join(__dirname, 'sample.txt')))).toEqual(
`##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`
)
    })
})
