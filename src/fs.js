import ObjectsToCsv from 'objects-to-csv'
import { resolve } from 'path'

const DEFAULT_BASE_FILE_NAME = 'ruzapret_dump'
const DEFAULT_EXT_NAME = 'csv'

export async function save (records, pathToFile) {
  return new ObjectsToCsv(records).toDisk(pathToFile, { append: true })
}

function createFileName (name, ext) {
  return `${name}_${(new Date().toJSON().slice(0,19))}.${ext}`
}

export function createPath (filepath) {
  return resolve(filepath, createFileName(DEFAULT_BASE_FILE_NAME, DEFAULT_EXT_NAME))
}
