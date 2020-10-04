//load require pkgs and variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const characters = require('./characters.json').results
const bodyParser = require('body-parser')
const trashTalkGenerator = require('./utils/trash_talk_generator')
const port = 3000

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set static files
app.use(express.static('public'))

//set route
app.get('/', (req, res) => {
  res.render('index', { characters })
})

app.post('/', (req, res) => {
  const job = req.body.job
  const trashTalk = trashTalkGenerator(job)
  res.render('index', { characters, trashTalk, job })
})

//set template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: require('./utils/hbsHelpers')
}))
app.set('view engine', 'handlebars')

//start and listen to the server
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})