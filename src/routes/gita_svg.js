// import modules
const gitaslokid = require('../utils/gitaslokid')
const { bgslok } = require('../models/bhagavadgita.model')
const renderSVG = require('../utils/renderSVG')

// GET slok svg urls
module.exports = (app, auth) => {
  app.get('/gita.svg', auth, async (req, res) => {
    const chapter = req.query.ch
    const slok = req.query.sl

    if (
      (typeof chapter === 'undefined' && typeof slok === 'undefined') ||
      (!isNaN(chapter) && typeof slok === 'undefined') ||
      (!isNaN(chapter) && !isNaN(slok))
    ) {
      await bgslok.findById(gitaslokid(chapter, slok), (err, data) => {
        if (!data) {
          console.info(`Chapter or Slok does not exist | Error : ${err}`)
          res.status(400).json({
            error: 'Chapter or Slok does not exist'
          })
        } else {
          console.info('successfully completed request')
          res.set({
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=600'
          })
          res.send(renderSVG(data))
        }
      })
    } else {
      res.status(400).json({
        error: 'Invalid request, Plese type valid input'
      })
    }
  })
}
