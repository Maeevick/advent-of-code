export const daily = () => 'day_09'

type Visited = Set<string>
type Knot = {
    x: number,
    y: number,
}

const RIGHT = 'R'
const LEFT = 'L'
const UP = 'U'
const DOWN = 'D'

export const first = (data: string) => {
    const visitedAtLeastOnce: Visited = new Set<string>()
    
    const [head, tail]: Knot[] = [{ x: 0, y: 0 }, { x: 0, y: 0 }]
    
    for (const move of data.split('\n')) {
        const [direction, value] = move.split(' ')
        for (let i = 0; i < Number(value); i++) {
            moveHeadToDirection(head, direction)
            followHeadWithTail(head, tail)
            visitedAtLeastOnce.add(`${tail.x}:${tail.y}`)
        }

    }
    return visitedAtLeastOnce.size
}

function moveHeadToDirection(head: Knot, direction: string) {
    if (direction === RIGHT) {
        head.x++
    }
    if (direction === LEFT) {
        head.x--
    }
    if (direction === UP) {
        head.y++
    }
    if (direction === DOWN) {
        head.y--
    }
}

function followHeadWithTail(head: Knot, tail: Knot) {
    const SAME_COLUMN = head.y === tail.y
    const SAME_ROW = head.x === tail.x

    const SLIGHTLY_RIGHT_GAP = head.x - tail.x > 0
    const SLIGHTLY_LEFT_GAP = head.x - tail.x < 0
    const SLIGHTLY_UP_GAP = head.y - tail.y > 0
    const SLIGHTLY_DOWN_GAP = head.y - tail.y < 0

    const RIGHT_GAP = head.x - tail.x > 1
    const LEFT_GAP = head.x - tail.x < -1
    const UP_GAP = head.y - tail.y > 1
    const DOWN_GAP = head.y - tail.y < -1

    const RIGHT_UP_GAP = SLIGHTLY_RIGHT_GAP && UP_GAP || SLIGHTLY_UP_GAP && RIGHT_GAP
    const LEFT_UP_GAP = SLIGHTLY_LEFT_GAP && UP_GAP || SLIGHTLY_UP_GAP && LEFT_GAP
    const RIGHT_DOWN_GAP = SLIGHTLY_RIGHT_GAP && DOWN_GAP || SLIGHTLY_DOWN_GAP && RIGHT_GAP
    const LEFT_DOWN_GAP = SLIGHTLY_LEFT_GAP && DOWN_GAP || SLIGHTLY_DOWN_GAP && LEFT_GAP

    if (RIGHT_GAP && SAME_COLUMN) {
        tail.x++
    }
    if (LEFT_GAP && SAME_COLUMN) {
        tail.x--
    }
    if (UP_GAP && SAME_ROW) {
        tail.y++
    }
    if (DOWN_GAP && SAME_ROW) {
        tail.y--
    }
    if (RIGHT_UP_GAP) {
        tail.x++
        tail.y++
    }
    if (LEFT_UP_GAP) {
        tail.x--
        tail.y++
    }
    if (RIGHT_DOWN_GAP) {
        tail.x++
        tail.y--
    }
    if (LEFT_DOWN_GAP) {
        tail.x--
        tail.y--
    }
}

export const second = (data: string) => {
    const TAIL = 9
    const visitedAtLeastOnce: Visited = new Set<string>()
    
    const knots: Knot[] = []
    for (let i = 0; i <= TAIL; i++) {
        knots.push({ x: 0, y: 0 })
    }

    for (const move of data.split('\n')) {
        const [direction, value] = move.split(' ')
        for (let k = 0; k < Number(value); k++) {
            moveHeadToDirection(knots[0], direction)
            for (let i = 1; i < knots.length; i++) {
                followHeadWithTail(knots[i - 1], knots[i])
                visitedAtLeastOnce.add(`${knots[TAIL].x}:${knots[TAIL].y}`)
            }
        }
    }
    return visitedAtLeastOnce.size
}
