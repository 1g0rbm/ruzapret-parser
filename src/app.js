import { resolve } from 'path'
import loadData from './loadData.js'
import parse from './parse.js'
import save from './save.js'

const app = async (filepath, everyLine = null) => {
  let numPage = 1
  const fullFilePath = resolve(filepath, createFileName('ruzapret_dump'))

  do {
    let page = await loadData(numPage)
    let nodeList = parse(page)
  
    if (nodeList.length === 0) {
      break
    }

    await save(nodeList, fullFilePath)
    
    if (everyLine) {
      everyLine(numPage)
    }

    numPage += 1
  } while(true)
}

function createFileName(name) {
  return `${name}_${(new Date().toJSON().slice(0,19))}.csv`
}

export default app
