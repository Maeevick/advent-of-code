export const daily = () => 'day_01'

const getCaloriesPerElf = (data: string) => {
    return data
        .split('\n\n')
        .map(i => {
            return i.split('\n')
                .map(Number)
                .reduce((a, c) => c + a, 0)
        })
}

export const first = (data: string) => {
    return Math.max(...getCaloriesPerElf(data))
}

export const second = (data: string) => {
    return getCaloriesPerElf(data).sort((a, b) => b - a).slice(0, 3).reduce((a, c) => c + a, 0)
}
