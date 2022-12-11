export const daily = () => 'day_11'

type Monkey = {
    id: string,
    items: number[],
    wlHandler: (n: number) => number,
    test: (n: number) => boolean,
    idFstMonkey: number,
    idSndMonkey: number,
    inspectionCount: number,
}

export const first = (data: string) => {
    const [monkeys,] = parseMonkeys(data)
    const wlHandlerWrapper = (monkey: Monkey, wlIdx: number) => Math.floor(monkey.wlHandler(monkey.items[wlIdx]) / 3)

    processForXRounds(20, monkeys, wlHandlerWrapper)

    return computeMonkeyBusiness(monkeys)
}

export const second = (data: string) => {
    // https://en.m.wikipedia.org/wiki/Chinese_remainder_theorem

    const [monkeys, chineseRemainderTheoremModulo] = parseMonkeys(data)
    const wlHandlerWrapper = (monkey: Monkey, wlIdx: number) => monkey.wlHandler(monkey.items[wlIdx] % chineseRemainderTheoremModulo)

    processForXRounds(10_000, monkeys, wlHandlerWrapper)
    
    return computeMonkeyBusiness(monkeys)
}
function buildMonkey(rawMonkey: string): [Monkey, number] {
    const [monkeyId, startingItems, worryLevelChange, testOperation, trueResult, falseResult] = rawMonkey.split('\n')
    
    const [wlSign, wlValue] = worryLevelChange.trim().replace('Operation: new = old ', '').split(' ')
    const testValue = Number(testOperation.trim().replace('Test: divisible by ', ''))

    const monkey = {
        id: monkeyId.trim().replace('Monkey ', '').replace(':', ''),
        items: startingItems.trim().replace('Starting items:', '').split(',').map(Number),
        wlHandler: (n: number) => {
            if(wlValue === 'old') {
                return n * n
            }
            if (wlSign == '*') {
                return n * Number(wlValue)
            }
            return n + Number(wlValue)
        },
        test: (n: number) => {
            return n % testValue === 0
        },
        idFstMonkey: Number(trueResult.trim().replace('If true: throw to monkey ', '')),
        idSndMonkey: Number(falseResult.trim().replace('If false: throw to monkey ', '')),
        inspectionCount: 0,
    }
    return [monkey, testValue]
}

function parseMonkeys(raw: string): [Monkey[], number] {
    let chineseRemainderTheoremModulo = 1
    const monkeys = []
    for (const m of raw.split('\n\n')) {
        const [monkey, mod] = buildMonkey(m)
        monkeys.push(monkey)
        chineseRemainderTheoremModulo *= mod
    }
    return [monkeys, chineseRemainderTheoremModulo]
}

function computeMonkeyBusiness(monkeys: Monkey[]) {
    return [...monkeys].sort((m1, m2) => m2.inspectionCount - m1.inspectionCount).slice(0,2).reduce((acc, {inspectionCount}) => acc * inspectionCount, 1)
}
function processForXRounds(ROUNDS_COUNT: number, monkeys: Monkey[], wlHandlerWrapper: (monkey: Monkey, wlIdx: number) => number) {
    for (let index = 0; index < ROUNDS_COUNT; index++) {
        for (const monkey of monkeys) {
            for (let i = 0; i < monkey.items.length; i++) {
                monkey.inspectionCount++

                const wl = wlHandlerWrapper(monkey, i)
                const target = monkey.test(wl) ? monkey.idFstMonkey : monkey.idSndMonkey

                monkey.items.splice(i--, 1)
                monkeys[target].items.push(wl)
            }
        }
    }
}

