export const daily = () => 'day_02'

const ROCK = 1
const PAPER = 2
const SCISSORS = 3

const LOSE = 0
const DRAW = 3
const WIN = 6

const FIRST_SCORE_MAP = {
    'A X': DRAW + ROCK,
    'B Y': DRAW + PAPER,
    'C Z': DRAW + SCISSORS,
    'A Y': WIN + PAPER,
    'B Z': WIN + SCISSORS,
    'C X': WIN + ROCK,
    'A Z': LOSE + SCISSORS,
    'B X': LOSE + ROCK,
    'C Y': LOSE + PAPER,
}

const SECOND_SCORE_MAP = {
    'A X': LOSE + SCISSORS,
    'B X': LOSE + ROCK,
    'C X': LOSE + PAPER,
    'A Y': DRAW + ROCK,
    'B Y': DRAW + PAPER,
    'C Y': DRAW + SCISSORS,
    'A Z': WIN + PAPER,
    'B Z': WIN + SCISSORS,
    'C Z': WIN + ROCK,
}

type PlayPossibleCombinaison = 'A X' | 'B Y' | 'C Z' | 'A Y' | 'B Z' | 'C X' | 'A Z' | 'B X' | 'C Y'
type ScoreMap = typeof FIRST_SCORE_MAP | typeof SECOND_SCORE_MAP

const getPlaysPerRound = (data: string) => data.split('\n')
const getScore = (combinaison: PlayPossibleCombinaison, map: ScoreMap) => map[combinaison]

export const first = (data: string) => {
    return getPlaysPerRound(data).reduce((a, c) => {
        return a + getScore(c as PlayPossibleCombinaison, FIRST_SCORE_MAP)
    }, 0)
}

export const second = (data: string) => {
    return getPlaysPerRound(data).reduce((a, c) => {

        return a + getScore(c as PlayPossibleCombinaison, SECOND_SCORE_MAP)
    }, 0)
}
