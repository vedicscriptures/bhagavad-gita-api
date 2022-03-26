// gitaslokid function
const gitaslokid = (ch, sl) => {
  const slokcount = [
    47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78
  ]
  const chapter = parseInt(ch) || Math.floor(Math.random() * 17) + 1
  const slok =
    parseInt(sl) || Math.floor(Math.random() * slokcount[chapter - 1]) + 1
  return `BG${chapter}.${slok}`
}
module.exports = gitaslokid
