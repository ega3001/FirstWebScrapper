/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://id.ati.su/login/')
  .type('#login', 'ega3001')
  .type('#password', 'raexedae4j')
  .click('#action-login')
  .wait(10000)
  // .evaluate(function() {
  //   return document.querySelector('#main .searchCenterMiddle li a').href
  // })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
