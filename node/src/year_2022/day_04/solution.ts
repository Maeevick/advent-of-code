type PairsOfIds = number[][]
type OverlapScorer = (c: PairsOfIds) => boolean

export const daily = () => 'day_04'

export const first = (data: string) => {
    return getPairsOfIds(data)
        .reduce(computeOverlapScore(isFullOverloap), 0)
}

export const second = (data: string) => {
    return getPairsOfIds(data)
        .reduce(computeOverlapScore(isAtAllOverloap), 0)
}

function getPairsOfIds(data: string) {
    return data
        .split('\n')
        .map(p => p.split(',')
            .map(e => e.split('-')
                .map(Number)
            )
        )
}

function computeOverlapScore(computeFn: OverlapScorer) {
    return function (a: number, c: PairsOfIds) {
        return computeFn(c) ? a + 1 : a
    }
}

function isFullOverloap([[fstStart, fstEnd], [sndStart, sndEnd]]: PairsOfIds) {
    return fstStart <= sndStart && fstEnd >= sndEnd || sndStart <= fstStart && sndEnd >= fstEnd
}

function isAtAllOverloap([[fstStart, fstEnd], [sndStart, sndEnd]]: PairsOfIds) {
    return fstEnd >= sndStart && fstStart <= sndStart || sndEnd >= fstStart && sndStart <= fstStart
}
