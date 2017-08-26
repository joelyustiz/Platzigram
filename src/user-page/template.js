var yo = require('yo-yo');
const layout = require('../layout');
const translate = require('../translate');

module.exports = function usarPageTemplate(user) {
  var el = yo`<div class="container user-page">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
        <div class="row">
          <div class="col s12 m10 offset-m1 l3 offset-l2 center">
            <img src="${user.avatar}" class="responsive-img circle">
          </div>
          <div class="col s12 m10 offset-m1 l6 lef-align">
            <h2 class="hide-on-large-only center-align">${user.username}</h2>
            <h2 class="hide-on-med-and-down left-align">${user.username}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        ${user.pictures.map(function (picture){
          return yo`<div class="col s12 m6 l4">
                      <div class="picture-container">
                        <img src="${picture.src}" class="picture responsive-img" />
                        <div class="likes"><i class="fa fa-heart"></i>${picture.likes}</div>
                      </div>
                    </div>`
        })}
      </div>
    </div>
  </div>`;
  return layout(el)
}
