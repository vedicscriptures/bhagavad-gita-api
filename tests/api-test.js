/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)
// importing environment variables
require('dotenv').config()

const server = 'http://localhost:8080'

const tests = [
  { url: '/slok', code: 200 },
  { url: '/slok/1/1', code: 200 },
  { url: '/chapters', code: 200 },
  { url: '/chapter/1', code: 400 },
  { url: '/gita.svg', code: 200 },
  { url: '/gita.svg?ch=1', code: 200 },
  { url: '/gita.svg?ch=1&sl=1', code: 200 },
  { url: '/slok/1', code: 404 },
  { url: '/slok/500', code: 404 },
  { url: '/slok/null', code: 404 },
  { url: '/slok/A', code: 404 },
  { url: '/slok/1/1/1', code: 404 },
  { url: '/slok/22/22', code: 400 },
  { url: '/slok/1/500', code: 400 },
  { url: '/slok/1/null', code: 400 },
  { url: '/slok/1/A', code: 400 },
  { url: '/chapters/A', code: 404 },
  { url: '/chapter/100', code: 400 },
  { url: '/chapter/null', code: 400 },
  { url: '/gita.svg/500', code: 404 },
  { url: '/gita.svg/null', code: 404 },
  { url: '/gita.svg/AAA', code: 404 },
  { url: '/gita.svg?ch=null', code: 400 },
  { url: '/gita.svg?ch=null&sl=null', code: 400 },
  { url: '/gita.svg?ch=200', code: 400 },
  { url: '/gita.svg?ch=200&sl=200', code: 400 }
]

const apikey = process.env.APIKEY

const apiKey = url => {
  if (url.includes('?')) {
    return `${url}&api_key=${apikey}`
  } else {
    return `${url}?api_key=${apikey}`
  }
}

describe('Gita', () => {
  tests.forEach(test => {
    describe(test.url, () => {
      it('API KEY in URL', done => {
        chai
          .request(server)
          .get(apiKey(test.url))
          .end((err, res) => {
            res.should.have.status(test.code)
            should.not.exist(err)
            done()
          })
      })
      it('API KEY in HEADER', done => {
        chai
          .request(server)
          .get(test.url)
          .set({ 'X-API-KEY': apikey })
          .end((err, res) => {
            res.should.have.status(test.code)
            should.not.exist(err)
            done()
          })
      })
    })
  })
})
