const page = require('page');
const header = require('../header')
const title = require('title')
const empty = require('empty-element')
const template  = require('./template')
const request = require('superagent');

page('/:usarname', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title(`Platzigram - ${ctx.params.usarname}`)
  empty(main).appendChild(template(ctx.user))
})


async function loadUser(ctx, next) {
  // request
  //  .post('/api/pictures')
  //  .send(data)
  //  .end(function (err, res) {
  //    console.log(arguments)
  //  })
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res=> res.json())
    next()
  } catch (e) {
      console.log(e)
  }
}
