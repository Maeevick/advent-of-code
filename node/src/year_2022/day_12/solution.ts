// Use of Dijkstra's algorithm : 
//
// source : https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
//    
// Dijkstra's algorithm to find the shortest path between a and b. 
// - It picks the unvisited vertex with the lowest distance, 
// - calculates the distance through it to each unvisited neighbor, 
// - and updates the neighbor's distance if smaller. 
// - Mark visited (set to red) when done with neighbors.

export const daily = () => 'day_12'

type Position = {
    key: string,
    x: number,
    y: number,
    height: number,
    isStart?: boolean,
    isEnd?: boolean,
}

const LOWEST = 'a'
const HIGHEST = 'z'
const START = 'S'
const END = 'E'

export const first = (data: string) => {
    
    const mapOfPositions = buildMapOfPositions(data.split('\n'))
    
    const [starts, end] = retrieveStartAndEndPositions(mapOfPositions)

    return processDijkstraAlgorithm(starts, end, mapOfPositions)
}

export const second = (data: string) => {
    const mapOfPositions = buildMapOfPositions(data.split('\n'), true)
    
    const [starts, end] = retrieveStartAndEndPositions(mapOfPositions)

    return processDijkstraAlgorithm(starts, end, mapOfPositions)
}

function buildMapOfPositions(grid: string[], isHiking = false) {
    const mapOfPositions: Record<string, Position> = {}

    for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[x].length; y++) {
            const cell = grid[x][y]
            const key = `${x}:${y}`
            if(cell === START || (isHiking && cell === LOWEST)) {
                mapOfPositions[key] = {
                    key,
                    x,
                    y,
                    height: LOWEST.charCodeAt(0) - 97,
                    isStart: true,
                }
            } else if(cell === END) {
                mapOfPositions[key] = {
                    key,
                    x,
                    y,
                    height: HIGHEST.charCodeAt(0) - 97,
                    isEnd: true,
                }
            } else {
                mapOfPositions[key] = {
                    key,
                    x,
                    y,
                    height: grid[x][y].charCodeAt(0) - 97,
                }
            }
        }
    }
    
    return mapOfPositions
}

function retrieveStartAndEndPositions(mapOfPositions: Record<string, Position>): [Position[], Position] {
    const cells = Object.values(mapOfPositions)

    return [
        cells.filter(h => h.isStart),
        cells.find(h => h.isEnd) as Position,
    ]
}

function processDijkstraAlgorithm(starts: Position[], end: Position, mapOfPositions: Record<string, Position>) {
    const visited = new Set<string>()
    const next = [...starts]
    const costs: Record<string, number> = {}
    for(const start of starts) {
        costs[start.key] = 0
    }
    
    while(next.length) {
        const current = next.shift() as Position

        if (!visited.has(current.key)) {
            const neighbours = retrieveCurrentReachableNeighbours(current, mapOfPositions)
            neighbours.forEach(n => {
                costs[n.key] = costs[n.key] == undefined ? costs[current.key] + 1 : Math.min(costs[current.key] + 1, costs[n.key])
            })
            
            next.push(...neighbours)
            visited.add(current.key)
        }
    }
    return costs[end.key]
}

function retrieveCurrentReachableNeighbours(current: Position, mapOfPositions: Record<string, Position>) {
    const neighbours: Position[] = []

    const left = mapOfPositions[`${current.x - 1}:${current.y}`]
    const right = mapOfPositions[`${current.x + 1}:${current.y}`]
    const up = mapOfPositions[`${current.x}:${current.y - 1}`]
    const down = mapOfPositions[`${current.x}:${current.y + 1}`]

    if(isReachable(left, current)) neighbours.push(left)
    if(isReachable(right, current)) neighbours.push(right)
    if(isReachable(up, current)) neighbours.push(up)
    if(isReachable(down, current)) neighbours.push(down)

    return neighbours
}
function isReachable(neighbour: Position, current: Position) {
    return neighbour && neighbour.height - current.height <= 1
}

