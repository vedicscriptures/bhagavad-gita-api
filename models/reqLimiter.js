const reqLimiter = require('express-rate-limit');
require('dotenv').config();
// Rate limit middleware
const reqLimit = reqLimiter({
  windowMs: 24*60*60*1000,
  max: process.env.RL,
  message: {error: `You have exceeded your ${ process.env.RL } requests per day limit. If you need more limit kindly request https://github.com/vedicscriptures/bhagavad-gita-api/discussions/6`},
  headers: true,
});
module.exports = reqLimit;