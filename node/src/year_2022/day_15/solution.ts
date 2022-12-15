export const daily = () => 'day_15'

const MODIFIER = 4_000_000

type Sensor = {
    key: string,
    x: number,
    y: number,
    manathan: number,
    beacon: Beacon,
}
type Beacon = {
    x: number,
    y: number,
}

export const first = (row: number) => (data: string) => {
    const [sensors, minX, maxX] = generateSensors(data)
    return computeImpossiblePositionsCount(sensors, minX, maxX, row)
}

export const second = (maxCoord: number) => (data: string) => {
    const [sensors, ,] = generateSensors(data)
    return computeTuningFrequency(sensors, maxCoord)
}

function generateSensors(data: string): [Sensor[], number, number] {
    const sensors: Sensor[] = []

    let minX = Infinity
    let maxX = -Infinity

    for (const [[sX, sY], [bX, bY]] of data.split('\n').map(parseLine)) {
        sensors.push({
            key: `${sX}:${sY}`,
            x: sX,
            y: sY,
            beacon: {
                x: bX,
                y: bY,
            },
            manathan: getManathanDistance(sX, bX, sY, bY)
        })

        minX = Math.min(minX, sX, bX)
        maxX = Math.max(maxX, sX, bX)
    }
    return [sensors, minX, maxX]
}

function parseLine(s: string) {
    return s.replace(/[a-z]|\s|=/gi, '')
        .split(':')
        .map(c => c.split(',').map(Number))
}

function getManathanDistance(x1: number, x2: number, y1: number, y2: number) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
function computeImpossiblePositionsCount(sensors: Sensor[], minX: number, maxX: number, row: number) {
    const maxManathanDistance = sensors.reduce((a, c) => Math.max(a, c.manathan), 0) * 2

    const firstColumn = minX - maxManathanDistance
    const lastColumn = maxX + maxManathanDistance

    let count = 0
    for (let column = firstColumn; column < lastColumn + 1; column++) {
        for (const sensor of sensors) {
            if (isImpossiblePositions(column, row, sensor)) {
                count++
                break
            }
        }
    }
    return count
}

function isBeaconCoordinates(column: number, row: number, beacon: Beacon) {
    return column === beacon.x && row === beacon.y
}

function isImpossiblePositions(column: any, row: number, sensor: Sensor) {
    return !isBeaconCoordinates(column, row, sensor.beacon) && getManathanDistance(column, sensor.x, row, sensor.y) <= sensor.manathan
}
function computeTuningFrequency(sensors: Sensor[], maxCoord: number) {
    for (let y = 0; y < maxCoord + 1; y++) {
        for (let x = 0; x < maxCoord + 1; x++) {
            let sensor = sensors.find(s => getManathanDistance(s.x, x, s.y, y) <= s.manathan)
            if(!sensor) {
               return x * 4_000_000 + y 
            } 
            x = sensor.x + sensor.manathan - Math.abs(sensor.y - y)
        }
    }
}

