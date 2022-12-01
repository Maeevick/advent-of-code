# typescript version on node

_boilerplate from:_ https://github.com/Maeevick/kata_sandbox_typescript

## daily workflow

- copy the `day_xx` folder
- paste and rename it to the correct day number, _exemple :_ `day_02`
- in the related `solution.test.ts` fix the daily expected result with the correct number, _exemple :_ `day_02` **(the test should fail now)**
- in the related `solution.ts` fix the daily return value with the correct number, _exemple :_ `day_02` **(the test should pass now)**
- grab the sample data in the challenge instruction and copy/paste it in the related `sample.txt` **(only if you use the tests to solve the challenge in a Test-First, TDD or TCR way)**
- grab the real data in the given file `puzzle input` and copy/paste it in the related `data.txt`
- add the correct import and the runtime in `index.ts` with the correct day, _exemple:_ 
    ```javascript
    // ...
    import { daily as day_02, first as first_02, second as second_02 } from "./day_02/solution"
    // ...
    showAnswersForYearAndDay(YEAR, day_02(), first_02, second_02)
    // ...
    ```
- solve the challenge :)

### Note: after a few days, I may automate it at 100% ;-)