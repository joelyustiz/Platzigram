var yo = require('yo-yo');
const lading = require('../landing');
const translate = require('../translate');
var signinForm = yo`<div class="col s12 m7 ">
   <div class="row">
     <div class="signup-box">
       <h1 class="platzigram">Platzigram</h1>
       <form action="" class="signup-form">
         <div class="section">
           <a class="btn btn-fb hide-on-small-only" href="#">${translate.message('signup.facebook')}</a>
            <a class="btn btn-fb hide-on-med-and-up" href="#"><i class="fa fa-facebook-official"></i>${translate.message('signup.text')}</a>
         </div>
         <div class="divider"></div>
         <div class="section">
           <input type="text" name="username" value="" placeholder="${translate.message('username')}">
           <input type="password" name="password" value="" placeholder="${translate.message('password')}">
           <button type="submit" name="button" class="btn waves-effect waves-light btn-signup">${translate.message('signup.text')}</button>
         </div>
       </form>
     </div>
   </div>
   <div class="row">
     <div class="login-box">
       ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
     </div>
   </div>
   </div>`;
module.exports = lading(signinForm)
