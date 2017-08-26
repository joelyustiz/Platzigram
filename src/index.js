const page = require('page')//utilizamos el modulo page para recargar las vistas del cliente sin recargar la pagina

require('./homepage')
require('./signin')
require('./signup')
require('./user-page')
require('./footer')

page()
