// import modules
const gitaslokid = require('../utils/gitaslokid')
const { bgslok } = require('../models/bhagavadgita.model')

// GET particular slok endpoint
module.exports = (app, auth) => {
  app.get('/slok/:ch/:sl', auth, async (req, res) => {
    try {
      const chapter = req.params.ch
      const slok = req.params.sl

      if (!isNaN(chapter) && !isNaN(slok)) {
        await bgslok.findById(gitaslokid(chapter, slok), (err, data) => {
          if (!data) {
            console.info(`Chapter or Slok does not exist | Error : ${err}`)
            res.status(400).json({
              error: 'Chapter or Slok does not exist'
            })
          } else {
            console.info('successfully completed request')
            res.json(data)
          }
        })
      } else {
        res.status(400).json({
          error: 'Invalid request, Plese type valid input'
        })
      }
    } catch (err) {
      console.error(`Error : ${err}`)
      res.status(500).json({ error: 'Technical Error' })
    }
  })
}
