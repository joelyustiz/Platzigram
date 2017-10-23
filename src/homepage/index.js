const page = require('page');
const empty = require('empty-element');
const template = require('./template');
const title = require('title');
const request = require('superagent');
const header = require('../header');
const axios = require('axios');
const webcam = require('webcamjs');
page('/', header, loading, loadPictures, function (ctx, next) {
  title('Platzigram')
  const main = document.getElementById('main-container');
      empty(main).appendChild(template(ctx.pictures));
      $('.modal').modal({
        ready: function (modal, trigger) {
          webcam.attach('#camara-input');
        },
        complete:function () {
          webcam.reset()
        }
      })
})

// function loadPictures(ctx, next) {
//   request // utilizamos superagent para la peticion cn callback
//   .get('/api/pictures')
//   .end(function (err, res) {
//       if(err) return console.log(err)
//
//       ctx.pictures = res.body;
//       next();
//   })
// }
function loading(ctx, next) {
  var el = document.createElement('div')
  el.classList.add('loader')
  document.getElementById('main-container').appendChild(el)
  next()
}
function loadPictures(ctx, next) {
  axios // utilizamos axios para la repiticon http
  .get('/api/pictures')
  .then(function (res) {
      ctx.pictures = res.data;
      next();
  })
  .catch(function (err) {
    console.log(err);
  })
}
