import loadData from './loadData.js'
import parse from './parse.js'
import {save, createPath} from './fs.js'

const app = async (filepath, onLineParsed = null) => {
  let numPage = 1
  const filePath = createPath(filepath)

  do {
    let page = await loadData(numPage)
    let nodeList = parse(page)

    if (nodeList.length === 0) {
      break
    }

    await save(nodeList, filePath)

    if (onLineParsed) {
      onLineParsed(numPage)
    }

    numPage += 1
  } while(true)
}

export default app
