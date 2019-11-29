import * as fs from 'fs'
import * as path from 'path'

export interface Content {
  pathname: string
  content: string
}

export function importContent(...paths: string[]): Content {
  fs.readdirSync(path.join(...paths)).forEach(file => {
    console.log(file)
  })
  console.log(paths)
  return {
    pathname: 'adsf',
    content: 'hellpo',
  }
}
