import fs from 'node:fs'

export const readInputSync = (path: string) => fs.readFileSync(path, { encoding: 'utf-8' })
