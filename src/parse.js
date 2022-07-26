import * as cheerio from 'cheerio'
import RecordNode from './RecordNode.js';

const parse = (data) => {
  const $ = cheerio.load(data)

  const trs = $('table tr').toArray()
  for (let i = 1; i < trs.length; i += 1) {
    list.push(new RecordNode(
      $(trs[i].children[0]).text(),
      $(trs[i].children[1]).text(),
      $(trs[i].children[2]).text(),
      $(trs[i].children[3]).text()
    ))
  }

  return list
}

export default parse
