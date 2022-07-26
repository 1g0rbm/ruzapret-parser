import axios from 'axios'

const baseUrl = 'https://ruzapret.com/'

const loadData = async (pageNum = 1) => {
  const { data } = await axios.get(buildUrl(pageNum))

  return data
}

function buildUrl(pageNum) {
  const url = new URL(baseUrl)
  url.searchParams.append('page', pageNum)

  return url.toString()
}

export default loadData
