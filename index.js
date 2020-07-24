const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
require('./src/helper/updateBattleStatusJobs')

const { port } = require('./config')
const routes = require('./src/routes/index')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.static(process.env.PICS_UPLOADS_PATH || 'uploads'))
app.use(express.urlencoded({ extended: true }))
app.get('/test', (req, res) => {
  console.log(req.query)
  res.sendStatus(200)
})

app.use('/auth', routes.Auth)
app.use('/battle', routes.Battle)
app.use('/gallery', routes.Gallery)
app.use('/group-creation', routes.GroupCreation)
app.use('/group', routes.Group)
app.use('/profile', routes.Profile)
app.use('/register', routes.Register)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
