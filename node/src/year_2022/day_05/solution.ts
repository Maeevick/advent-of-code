export const daily = () => 'day_05'

export const first = (data: string) => {
    const [stacks, instructions] = data.split('\n\n').map(e => e.split('\n'))
    const stackMap = makeStackMap(stacks)
    for (const instruction of instructions) {
        const [moves, from, to] = decodeInstructions(instruction)
        for (let i = 0; i < moves; i++) {
            const crate = stackMap[from].pop() as string
            stackMap[to].push(crate)
        }
    }
    return getTopCrates(stackMap)
}

export const second = (data: string) => {
    const [stacks, instructions] = data.split('\n\n').map(e => e.split('\n'))
    const stackMap = makeStackMap(stacks)
    for (const instruction of instructions) {
        const [moves, from, to] = decodeInstructions(instruction)

        const crates = stackMap[from].splice(stackMap[from].length - moves, moves)
        stackMap[to].push(...crates)
    }
    return getTopCrates(stackMap)
}

function makeStackMap(stacks: string[]) {
    const stackMap = stacks[stacks.length - 1].split('').filter(e => !!e && e !== ' ').map(Number).reduce((a: Record<number, String[]>, c: number) => {
        a[c] = []
        return a
    }, {})

    for (let i = 0; i < stacks.length - 1; i++) {
        let key = 1
        for (let j = 1; j < stacks[i].length; j += 4) {
            if (stacks[i][j] !== ' ') stackMap[key].unshift(stacks[i][j])
            key++
        }
    }

    return stackMap
}

function getTopCrates(stackMap: Record<number, String[]>) {
    let topCrates = '';
    for (const key in stackMap) {
        const topCrate = stackMap[key].slice().pop()
        topCrates += topCrate
    }
    return topCrates
}

function decodeInstructions(instruction: string) {
    return instruction.replace('move ', '').replace('from ', '').replace('to ', '').split(' ').map(Number)
}