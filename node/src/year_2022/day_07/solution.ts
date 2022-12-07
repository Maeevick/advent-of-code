export const daily = () => 'day_07'

type File = {
    name: string,
    size: number,
}

type DirectorySummary = {
    name: string,
    size: number,
}

type Directory = {
    parent: null | Directory,
    name: string,
    files: File[],
    dirs: Directory[],
}

const CMD_SYMBOL = '$'
const DIR_RESULT_SYMBOL = 'dir'
const CHANGE_DIR_STATEMENT = 'cd'
const ROOT = '/'
const BACK = '..'

export const first = (data: string) => {
    return generateFlatListOfDirWithSize(data.split('\n'))
        .filter(d => d.size < 100_000)
        .reduce((a, c) => {
            return a + c.size
        }, 0)
}

export const second = (data: string) => {
    const directoriesWithSize = generateFlatListOfDirWithSize(data.split('\n'))
    const outerMostDirectory = directoriesWithSize.find(d => d.name === '/') as DirectorySummary
    const necessarySpace = 30_000_000 - (70_000_000 - outerMostDirectory.size)

    return directoriesWithSize.filter(d => d.size >= necessarySpace).reduce((a, c) => {
        return a.size > c.size ? c : a
    }).size
}

function generateFlatListOfDirWithSize(data: string[]) {
    const listOfDirWithSize: DirectorySummary[] = []

    computeSize(generateTree(data), listOfDirWithSize)

    return listOfDirWithSize
}

function generateTree(data: string[]) {
    const root: Directory = {
        parent: null,
        name: ROOT,
        files: [],
        dirs: [],
    }

    createTree(data, root)

    return root
}

function createTree(data: string[], root: Directory) {
    let current = root
    for (const row of data) {
        if (isCmd(row) && isChangeDirStatement(row)) {
            const [, , dist] = row.split(' ')
            if (dist === BACK) {
                current = current.parent as Directory
            } else {
                for (const child of current.dirs) {
                    if (child.name === dist) {
                        current = child
                    }
                }
            }
        }
        if(isAContentDirectoryResult(row)) {
            current.dirs.push({ parent: current, name: row.split(' ')[1], files: [], dirs: [] })
        }
        if(isAContentFileResult(row)) {
            const [size, name] = row.split(' ')
            current.files.push({ name, size: Number(size) })
        }
    }
    return current
}

function computeSize(current: Directory, directorySizes: DirectorySummary[]): number {
    let sum = 0
    for (const file of current.files) {
        sum += file.size
    }
    for (const dir of current.dirs) {
        sum += computeSize(dir, directorySizes)
    }
    directorySizes.push({ name: current.name, size: sum })
    return sum
}

function isCmd(row: string) {
    return row[0] === CMD_SYMBOL
}

function isChangeDirStatement(row: string) {
    return row.split(' ')[1] === CHANGE_DIR_STATEMENT
}

function isAContentDirectoryResult(row: string) {
    return !isCmd(row) && row.slice(0, 3) === DIR_RESULT_SYMBOL
}

function isAContentFileResult(row: string) {
    return !isCmd(row) && !isAContentDirectoryResult(row)
}

