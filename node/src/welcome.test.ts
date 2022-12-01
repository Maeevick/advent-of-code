import { greeting } from "./welcome"

describe('when project is installed', () => {
    test('then says "Welcome" and test passes', () => {
        expect(greeting()).toEqual('Hi, Advent Of Code !')
    })
})