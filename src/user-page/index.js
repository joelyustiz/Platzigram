const page = require('page');
const header = require('../header')
const title = require('title')
const empty = require('empty-element')
const template  = require('./template')
const request = require('superagent');

page('/:username', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title(`Platzigram - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))
})
page('/:username/:id', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title(`Platzigram - ${ctx.user.username}`)
  empty(main).appendChild(template(ctx.user))
  $(`#modal${ctx.params.id}`).modal('open',{
    complete: function () {
      page(`/${ctx.params.username}`)
    }
  })
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
