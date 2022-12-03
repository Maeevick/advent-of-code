export const daily = () => 'day_03'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_ALPHABET = ALPHABET.toUpperCase()

const SCORE_MAP = ALPHABET.split('')
    .reduce((a: Record<string, number>, c: string, i: number) => {
        a[c] = i + 1
        a[c.toUpperCase()] = i + 27

        return a
    }, {})

const getScore = (char: string) => {
    return SCORE_MAP[char]
}

export const first = (data: string) => {
    return sum(
        computePrioritiesScore(
            getRuckracks(data)
        )
    )
}

export const second = (data: string) => {
    return computeBagdesScore(
        getRuckracks(data)
    )
}

function getRuckracks(data: string) {
    return data.split('\n')
}

function computePrioritiesScore(ruckracks: string[]) {
    return ruckracks.map(backpack => {
        const pivot = backpack.length / 2
        const [first, second] = [backpack.slice(0, pivot).split(''), backpack.slice(pivot).split('')]
        while (first.length > 0) {
            const head = first.shift() as string
            if (second.includes(head)) {
                return getScore(head)
            }

        }
        return 0
    })
}

function sum(values: number[]) {
    return values.reduce((a, c) => c + a, 0)
}

function computeBagdesScore(ruckracks: string[]) {
    let index = 0
    let score = 0
    while (index < ruckracks.length) {
        const [fst, snd, trd] = ruckracks.slice(index, index + 3)
        for (const c of `${ALPHABET}${UPPER_ALPHABET}`) {
            if (fst.includes(c) && snd.includes(c) && trd.includes(c)) {
                score += getScore(c)
                break
            }
        }
        index += 3
    }
    return score
}
