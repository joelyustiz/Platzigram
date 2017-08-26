const yo = require('yo-yo');
if (!window.Intl) {
    window.Intl = require('intl'); // polyfill for `Intl`
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}
const IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
const IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

const es = require('./es');
const en = require('./en-US');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;
var locale = localStorage.locale ||'es';

module.exports = {
  message : function (text, opts) {
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(opts)
  },
  date: new IntlRelativeFormat(locale)

}
