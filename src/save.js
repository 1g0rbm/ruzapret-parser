import ObjectsToCsv from "objects-to-csv"

const save = async (records, pathToFile) => {
  new ObjectsToCsv(records).toDisk(pathToFile, { append: true })
}

export default save