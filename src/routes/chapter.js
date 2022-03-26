// import modules
const { bgchap } = require('../models/bhagavadgita.model')

// GET all chapters urls
module.exports = (app, auth) => {
  app.get('/chapters', auth, async (req, res) => {
    await bgchap
      .find({}, { _id: 0 }, (err, data) => {
        if (!data) {
          console.info(`Data not found | Error : ${err}`)
          res.status(400).json({ error: 'Data not found' })
        } else {
          console.info('successfully completed request')
          res.json(data)
        }
      })
      .sort({ chapter_number: 1 })
  })
}
