export const daily = () => 'day_13'

const UNKNOWN = 0
const RIGHT = -1
const WRONG = 1
const DIVIDER_PACKETS = ['[[2]]', '[[6]]']

export const first = (data: string) => {
    return data.split('\n\n')
        .map(p => p.split('\n'))
        .map(([fst, snd]) => checkPairsOfIndex(fst, snd))
        .reduce((a, c, i) => c < 0 ? a + i + 1 : a, 0)
}

export const second = (data: string) => {

    const packets = data.split('\n\n')
        .map(p => p.split('\n'))
        .flatMap((p) => p)
        .concat(...DIVIDER_PACKETS)
        .sort((fst, snd) => checkPairsOfIndex(fst, snd))

    return packets.reduce((a,c,i) => DIVIDER_PACKETS.includes(c) ? a * (i + 1) : a, 1)
}
function checkPairsOfIndex(first: string, second: string): number {
    const firstE = eval(first)
    const secondE = eval(second)

    if (first == undefined && second == undefined) return UNKNOWN
    if (first == undefined) return RIGHT
    if (second == undefined) return WRONG

    if (areNumbers(firstE, secondE) && firstE === secondE) return UNKNOWN
    if (areNumbers(firstE, secondE) && firstE < secondE) return RIGHT
    if (areNumbers(firstE, secondE) && firstE > secondE) return WRONG

    const f = Array.isArray(firstE) ? firstE : [firstE]
    const s = Array.isArray(secondE) ? secondE : [secondE]

    for (let i = 0, d = Math.max(f.length, s.length); i < d; i++) {
        const r = checkPairsOfIndex(f[i], s[i])
        if (r !== UNKNOWN) return r
    }
    return UNKNOWN
}

function areNumbers(a: any, b: any) {
    return typeof a == 'number' && typeof b == 'number'
}
