export const daily = () => 'day_06'

export const first = (data: string) => {
    return findMarkerWithLength(data, 4)
}

export const second = (data: string) => {
    return findMarkerWithLength(data, 14)
}

function findMarkerWithLength(data: string, length: number) {
    let position = 0
    while (position < data.length) {
        const isMarker = isMarkerWithUniqueCharacters(
            data.slice(position, position + length)
        )
        if (isMarker) {
            return position + length
        }
        position++
    }
    return position
}

function isMarkerWithUniqueCharacters(maybeMarker: string) {
    for (let i = 0; i < maybeMarker.length; i++) {
        const copy = maybeMarker.slice().split('')
        const target = copy.splice(i, 1)

        if (copy.includes(target[0])) {
            return false
        }
    }
    return true
}

