const { RateLimiterMemory } = require('rate-limiter-flexible');

// import modules of user
const user = require('../models/user.model');

const rateLimiter = new RateLimiterMemory({
  points: 1000,
  duration: 24*60*60,
});  

module.exports = async (req, res, next) => {
  try {
    //var token = provided in email;
    var token = req.headers["x-api-key"] || req.query["api_key"];
    await user.findById(token, function (err, data){ 
      if(!data){
        res.status(401).json({ error: 'Invalid api key or given is not provided!' });
      }
      else {
        var cp = 1000/data.count;// Consume points = 1000/userlimit
        rateLimiter.consume(token, cp ) 
        .then((rateLimiterRes) => {
            res.set({
                "X-RateLimit-Limit": data.count,
                "X-RateLimit-Remaining": rateLimiterRes.remainingPoints/cp,
                "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
            });
            next();
          })
          .catch((rateLimiterRes) => {
            res.set({
                "X-RateLimit-Limit": data.count,
                "X-RateLimit-Remaining": rateLimiterRes.remainingPoints/cp,
                "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
            });
            res.status(429).send({error:'You have exceeded your per day requests limit. If you need more limit kindly request https://github.com/vedicscriptures/bhagavad-gita-api/discussions/6'});
          });
      };
    });       
  } 
  catch {
    res.status(400).json({ error: 'Invalid request!' });
  }
};