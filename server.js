var express = require('express')
var ext = require('file-extension');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

var app = express()
app.set('view engine','pug')
app.use(express.static('public'))//comando para que cualquiera pueda acceder a los archivos staticos

app.get('/', function (req, res) {
  res.render('index', {title: 'Platigram'})
})

app.get('/signup', function (req, res) {
  res.render('index', {title: 'Platigram - signup'})
})

app.get('/signin', function (req, res) {
  res.render('index', {title: 'Platigram - signin'})
})

app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user:{
        username:'sacha Li',
        avatar:'https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t1.0-1/p160x160/14369948_10209986089439622_2169601001891907466_n.jpg?oh=5581b5094e2f0bf6b8f2df9f5bc4ccac&oe=5A1071E7&__gda__=1509626515_563b8d16eb3f2188a5aaa2ec208cfd53'
      },
      url:'office.jpg',
      likes:0,
      liked:false,
      createAt: new Date().getTime()
    },
    {
      user:{
        username:'Joel Yustiz',
        avatar:'https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t1.0-1/p160x160/14369948_10209986089439622_2169601001891907466_n.jpg?oh=5581b5094e2f0bf6b8f2df9f5bc4ccac&oe=5A1071E7&__gda__=1509626515_563b8d16eb3f2188a5aaa2ec208cfd53'
      },
      url:'office.jpg',
      likes:1,
      liked:true,
      createAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]
    setTimeout(() => res.send(pictures), 2000)


} )

app.post('/api/pictures', function (rep, res) {
  upload(rep, res, function (err) {
    if (err) {
      return res.status(500).send("Error subiendo")
    }
    res.status(200).send("file Uploaded")
  })
})
app.get('/api/user/:usarname', function (req, res) {
    const user = {
      username: 'joel',
      avatar:'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg',
      pictures:[
        {
          id:1,
          src:'http://www.freejpg.com.ar/asset/400/b8/b8cd/F100010863.jpg',
          likes: 2
        },
        {
          id:2,
          src:'http://www.freejpg.com.ar/asset/900/41/4117/F100010859.jpg',
          likes: 13
        },
        {
          id:3,
          src:'http://www.freejpg.com.ar/asset/900/bd/bd7d/F100010850.jpg',
          likes: 100
        },
        {
          id:4,
          src:'http://www.freejpg.com.ar/asset/900/28/28a8/F100010842.jpg',
          likes: 25
        },{
          id:5,
          src:'http://www.freejpg.com.ar/asset/900/cb/cb3b/F100010828.jpg',
          likes:30
        }
      ]
    }
    res.send(user)
})

app.get('/:username', function (req, res) {
  res.render('index',{title: `Platzigram - ${req.params.usarname}`})
})

app.listen(3000,function (err) {
  if (err) return console.log('Huno un error'), process.exit(1)
  console.log('Platigram Escuchando en el puerto 3000')
})
