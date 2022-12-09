export const daily = () => 'day_08'

type ScenicScores = Record<string, Record<string, number>>

export const first = (data: string) => {
    const forest = data.split('\n')
    const edgeTreeCount = countEdgeTrees(forest)
    const [forestByRow, forestByColumn] = createForestMaps(forest)

    const visibleTrees: string[] = []
    computeVisibleTreeCountFromView(forestByRow, visibleTrees)
    computeVisibleTreeCountFromView(forestByColumn, visibleTrees, true)

    return visibleTrees.length + edgeTreeCount
}

export const second = (data: string) => {
    const forest = data.split('\n')
    const [forestByRow, forestByColumn] = createForestMaps(forest)

    return getMaxScenicScore(computeScenicScores(forestByRow, forestByColumn))
}

function countEdgeTrees(forest: string[]) {
    return (forest.length - 1) * 4
}

function createForestMaps(rows: string[]) {
    const forestByColumn: Record<string, string[]> = {}
    const forestByRow: Record<string, string[]> = {}

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        for (let j = 0; j < row.length; j++) {
            const tree = row[j]
            if (!forestByColumn[j]) forestByColumn[j] = []
            forestByColumn[j].push(tree)
            if (!forestByRow[i]) forestByRow[i] = []
            forestByRow[i].push(tree)
        }
    }
    return [forestByRow, forestByColumn]
}
function computeVisibleTreeCountFromView(forest: Record<string, string[]>, visibleTrees: string[], needRotation = false) {
    const rows = Object.values(forest)
    for (let i = 1; i < rows.length - 1; i++) {
        for (let j = 1; j < rows[i].length - 1; j++) {
            const isVisibleFromLeft = checkVisibilityFromStartToEnd(rows, i, j, 0, j)
            const isVisibleFromRight = checkVisibilityFromStartToEnd(rows, i, j, j + 1, rows[i].length)
            const coordinates = needRotation ? `${j}:${i}` : `${i}:${j}`

            if ((isVisibleFromLeft || isVisibleFromRight) && !visibleTrees.includes(coordinates)) {
                visibleTrees.push(coordinates)
            }
        }
    }
    return visibleTrees
}

function checkVisibilityFromStartToEnd(rows: string[][], i: number, j: number, start: number, end: number) {
    for (let k = start; k < end; k++) {
        if (rows[i][j] <= rows[i][k]) {
            return false
        }
    }
    return true
}

function computeScenicScores(forestByRow: Record<string, string[]>, forestByColumn: Record<string, string[]>) {
    const scenicScores: ScenicScores = {}

    computeScenicScoreFromRows(Object.values(forestByRow), scenicScores)
    computeScenicScoreFromColumns(Object.values(forestByColumn), scenicScores)
    
    return scenicScores
}

function getMaxScenicScore(scenicScores: ScenicScores) {
    return Math.max(
        ...Object.values(scenicScores)
            .map(e => Object.values(e)
                .reduce((a, c) => a * c))
    )
}



function computeScenicScoreFromRows(rows: string[][], scenicScores: ScenicScores) {
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        for (let j = 0; j < row.length; j++) {
            const key = `${i}:${j}`
            if (!scenicScores[key]) {
                scenicScores[key] = {
                    L: 0,
                    R: 0,
                    T: 0,
                    B: 0,
                }
            }
            const tree = row[j]
            let process = true
            let index = -1
            while (process && row[j + index] !== undefined) {
                scenicScores[key].L++
                if (tree <= row[j + index]) {
                    process = false
                }
                index--
            }

            process = true
            index = 1
            while (process && row[j + index] !== undefined) {
                scenicScores[key].R++
                if (tree <= row[j + index]) {
                    process = false
                }
                index++
            }

        }
    }
}

function computeScenicScoreFromColumns(columns: string[][], scenicScores: ScenicScores) {
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i]
        for (let j = 0; j < column.length; j++) {
            const key = `${j}:${i}`

            const tree = column[j]

            let process = true
            let index = -1
            while (process && column[j + index] !== undefined) {
                scenicScores[key].T++
                if (tree <= column[j + index]) {
                    process = false
                }
                index--
            }

            process = true
            index = 1
            while (process && column[j + index] !== undefined) {
                scenicScores[key].B++
                if (tree <= column[j + index]) {
                    process = false
                }
                index++
            }
        }
    }
}

