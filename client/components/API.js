import request from 'superagent'

module.exports = {
  getDefinition: getDefinition
}

function getDefinition (url, callback) {
  // e.preventDefault()
  
  request
    .get(url)
    .set("X-Mashape-Key", "hbjTqk3gHemshAFHp3EKJ9tM7cWjp10JXkRjsnM3hvoTSMlbhw")
    .set("Accept", "text/plain")
    .end(function (err, res) {
      if (err || !res.ok) {
        alert('Oh dear! An error occurred')
      } else {
        callback(null, res.body)
      }
    })
  }
