// import modules
const gitaslokid = require('../utils/gitaslokid')
const { bgslok } = require('../models/bhagavadgita.model')

// GET Random gita Quote
module.exports = (app, auth) => {
  app.get('/slok', auth, async (req, res) => {
    try {
      await bgslok.findById(gitaslokid(), (err, data) => {
        if (!data) {
          console.info(`Data not found | Error : ${err}`)
          res.status(400).json({ error: 'Data not found' })
        } else {
          console.info('successfully completed request')
          res.json(data)
        }
      })
    } catch (err) {
      console.error(`Error : ${err}`)
      res.status(500).json({ error: 'Technical Error' })
    }
  })
}
