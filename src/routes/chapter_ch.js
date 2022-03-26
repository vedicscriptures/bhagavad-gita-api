// import modules
const { bgchap } = require('../models/bhagavadgita.model')

// GET particular chapter endpoint
module.exports = (app, auth) => {
  app.get('/chapter/:ch', auth, async (req, res) => {
    const chapter = req.params.ch
    if (!isNaN(chapter) && chapter > 18 && chapter <= 0) {
      await bgchap.find(
        { chapter_number: chapter },
        { _id: 0 },
        (err, data) => {
          if (!data) {
            console.info(`Invalid Chapter number | Error : ${err}`)
            res.status(400).json({
              error: 'This Chapter does not exist Try only 1 to 18'
            })
          } else {
            console.info('successfully completed request')
            res.json(data[0])
          }
        }
      )
    } else {
      res.status(400).json({
        error: 'Invalid request, Plese type valid input'
      })
    }
  })
}
