export const daily = () => 'day_14'

type Map = Record<string, string>

type Bounds = {
    minX: number,
    maxX: number,
    maxY: number,
}

const START = '+'
const AIR = '.'
const SAND = 'o'
const ROCK = '#'

const INITIAL_COORDINATES = '500:0'

export const first = (data: string) => {
    const map = generateMap()(parseRockPositions(data))

    let x = 500
    let y = 0
    let unitOfSandCount = 0
    while (!isInfiniteFlowing(map, x, y)) {
        if (map[`${x}:${y + 1}`] === AIR) y++
        else if (map[`${x - 1}:${y + 1}`] === AIR) (x--, y++)
        else if (map[`${x + 1}:${y + 1}`] === AIR) (x++, y++)
        else if (areNextThreePositionsBlocked(map, x, y)) {
            map[`${x}:${y}`] = SAND
            unitOfSandCount++
            x = 500
            y = 0
        }
    }
    return unitOfSandCount
}

export const second = (data: string) => {
    const map = generateMap(true)(parseRockPositions(data))

    let x = 500
    let y = 0
    let unitOfSandCount = 1
    while (!isFull(map, x, y)) {
        if (canGoDown(map, x, y)) y++
        else if (canGoLeft(map, x, y)) (x--, y++)
        else if (canGoRight(map, x, y)) (x++, y++)
        else {
            map[`${x}:${y}`] = SAND
            unitOfSandCount++
            x = 500
            y = 0
        }
    }
    return unitOfSandCount
}

function parseRockPositions(data: string) {
    return data.split('\n').map(r => r.split(' -> ').map(c => c.split(',').map(Number)))
}

function generateMap(hasFloor = false) {
    return function (rocks: number[][][]) {
        const mapWithRocks = fillMapWithRocks(rocks, { INITIAL_COORDINATES: START })
        const bounds = retrieveMapBounds(mapWithRocks)
        const mapWithAir = fillMapWithAir(mapWithRocks, bounds)

        return hasFloor ? fillMapWithExtendedFloor(mapWithAir, bounds) : mapWithAir
    }
}

function fillMapWithRocks(rocks: number[][][], originalMap: Map) {
    const map: Map = {}

    for (let i = 0; i < rocks.length; i++) {
        for (let j = 0; j < rocks[i].length - 1; j++) {
            const [x1, y1] = rocks[i][j]
            const [x2, y2] = rocks[i][j + 1]

            for (let k = Math.min(x1, x2); k < Math.max(x1, x2) + 1; k++) {
                for (let l = Math.min(y1, y2); l < Math.max(y1, y2) + 1; l++) {
                    map[`${k}:${l}`] = ROCK
                }
            }
        }
    }
    return { ...originalMap, ...map }
}

function fillMapWithAir(originalMap: Map, { minX, maxX, maxY }: Bounds) {
    const map: Map = {}

    for (let i = minX; i < maxX + 1; i++) {
        for (let j = 0; j < maxY + 1; j++) {
            if (!map[`${i}:${j}`]) map[`${i}:${j}`] = AIR
        }
    }

    return { ...map, ...originalMap }
}

function fillMapWithExtendedFloor(originalMap: Map, { maxY }: Bounds) {
    const floorY = maxY + 2
    const floorMinX = 500 - 1 - floorY
    const floorMaxX = 500 + 1 + floorY

    const map: Map = {}
    for (let i = floorMinX; i < floorMaxX + 1; i++) {
        for (let j = 0; j < floorY; j++) {
            if (!map[`${i}:${j}`]) map[`${i}:${j}`] = AIR
        }
        if (!map[`${i}:${floorY}`]) map[`${i}:${floorY}`] = ROCK
    }

    return { ...map, ...originalMap }
}

function retrieveMapBounds(originalMap: Map) {
    return Object.keys(originalMap)
        .map(c => c.split(':').map(Number))
        .reduce((a, [x, y]) => {
            return {
                minX: x < a.minX ? x : a.minX,
                maxX: x > a.maxX ? x : a.maxX,
                minY: 0,
                maxY: y > a.maxY ? y : a.maxY,
            }
        }, { minX: Infinity, minY: 0, maxX: -Infinity, maxY: -Infinity })
}

function areNextThreePositionsBlocked(map: Map, x: number, y: number) {
    return [SAND, ROCK].includes(map[`${x}:${y + 1}`])
        && [SAND, ROCK].includes(map[`${x - 1}:${y + 1}`])
        && [SAND, ROCK].includes(map[`${x + 1}:${y + 1}`])
}

function areNextThreePositionsNotAir(map: Map, x: number, y: number) {
    return !canGoDown(map, x, y)
        && !canGoLeft(map, x, y)
        && !canGoRight(map, x, y)
}

function isStartPosition(x: number, y: number) {
    return `${x}:${y}` === INITIAL_COORDINATES
}

function canGoDown(map: Map, x: number, y: number) {
    return map[`${x}:${y + 1}`] === AIR
}

function canGoLeft(map: Map, x: number, y: number) {
    return map[`${x - 1}:${y + 1}`] === AIR
}

function canGoRight(map: Map, x: number, y: number) {
    return map[`${x + 1}:${y + 1}`] === AIR
}

function isInfiniteFlowing(map: Map, x: number, y: number) {
    return !areNextThreePositionsBlocked(map, x, y) && areNextThreePositionsNotAir(map, x, y)
}

function isFull(map: Map, x: number, y: number) {
    return isStartPosition(x, y) && areNextThreePositionsNotAir(map, x, y)
}

