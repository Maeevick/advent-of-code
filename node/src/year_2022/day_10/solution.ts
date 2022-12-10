export const daily = () => 'day_10'

const ADDX = 'addx'
const CRT_SIZE = 240

export const first = (data: string) => {
    const registerValues = generateAllRegisterValues(data)
    let sum = 0
    for (const i in registerValues) {
        const cycle = Number(i) + 1
        if (isMeasureCycle(cycle)) {
            sum += computeRegisterValuesAtIndex(registerValues, cycle) * cycle
        }
    }
    return sum
}

export const second = (data: string) => {
    const registerValues = generateAllRegisterValues(data)
    let pixels = ''
    for (const i in registerValues) {
        const cycle = Number(i) + 1
        if (cycle <= CRT_SIZE) {
            const crtIndex = computeCRTIndex(Number(i))
            const xRegister = computeRegisterValuesAtIndex(registerValues, cycle)

            pixels += appendPixelSymbolCharacter(xRegister, crtIndex)
            pixels += appendEndOfLineCharacterWhenNecessary(cycle)
        }
    }
    return pixels
}

function generateAllRegisterValues(data: string) {
    const registerValues = [1]

    const instructions = data.split('\n').map(i => i.split(' '))
    for (const [instruction, value] of instructions) {
        registerValues.push(0)
        if (instruction === ADDX) {
            registerValues.push(Number(value))
        }
    }
    return registerValues
}

function isMeasureCycle(cycle: number) {
    return cycle === 20 || cycle % 40 === 20
}

function computeRegisterValuesAtIndex(registerValues: number[], i: number) {
    return registerValues.slice(0, i).reduce((a, c) => a + c)
}

function computeCRTIndex(i: number) {
    return isEndOfCRTLine(i + 1) ? 39 : i % 40
}

function isEndOfCRTLine(i: number) {
    return i % 40 === 0
}

function appendPixelSymbolCharacter(xRegister: number, crtIndex: number) {
    return Math.abs(xRegister - crtIndex) > 1 ? '.' : '#'
}

function appendEndOfLineCharacterWhenNecessary(cycle: number) {
    return cycle !== CRT_SIZE && isEndOfCRTLine(cycle) ? '\n' : ''
}

