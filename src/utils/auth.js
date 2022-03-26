// importing the RateLimiter module
const { RateLimiterMemory } = require('rate-limiter-flexible')

// import modules of user
const user = require('../models/user.model')

// RateLimiter configuration
const rateLimiter = new RateLimiterMemory({
  points: 1000,
  duration: 24 * 60 * 60
})

// auth middleware
const auth = async (req, res, next) => {
  try {
    const token = req.headers['x-api-key'] || req.query.api_key
    console.info(
      `Request : ${req.protocol}://${req.get('host')}${req.originalUrl}`
    )
    console.info(`Ip Address : ${req.connection.remoteAddress}`)
    if (!token) {
      throw new Error('Api key is not provided!')
    }
    await user.findById(token, (err, data) => {
      if (err) {
        throw new Error(`${token} - Invalid api key provided!\nerror : ${err}`)
      } else {
        console.info(`username : ${data.name}`)
        // Consume points = 1000/userlimit
        const cp = 1000 / data.count
        rateLimiter
          .consume(token, cp)
          .then(rateLimiterRes => {
            res.set({
              'X-RateLimit-Limit': data.count,
              'X-RateLimit-Remaining': rateLimiterRes.remainingPoints / cp,
              'X-RateLimit-Reset': new Date(
                Date.now() + rateLimiterRes.msBeforeNext
              )
            })
            next()
          })
          .catch(rateLimiterRes => {
            res.set({
              'X-RateLimit-Limit': data.count,
              'X-RateLimit-Remaining': rateLimiterRes.remainingPoints / cp,
              'X-RateLimit-Reset': new Date(
                Date.now() + rateLimiterRes.msBeforeNext
              )
            })
            res.status(429).send({
              error:
                'You have exceeded your per day requests limit. If you need more limit kindly visit https://github.com/vedicscriptures/bhagavad-gita-api/discussions/6'
            })
          })
      }
    })
  } catch (error) {
    console.error(error)
    res.status(401).json({
      error: 'Invalid api key or given is not provided!',
      message:
        'Read the documentation about authentication at https://docs.bhagavadgitaapi.in/api-reference/authentication'
    })
  }
}
module.exports = auth
