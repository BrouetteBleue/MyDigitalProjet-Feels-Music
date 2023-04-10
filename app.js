//server.js

/*****
 * MODULES
*****/

let express = require('express')

//charge le module de database
//let db = require('./config/database')

let session = require('express-session')


/******
 * CONFIG
 * ***////

let app = express()
app.set('view engine', 'ejs')

//permet de décoder les données de requêtes
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/assets', express.static('public'))

//pour la session
app.set('trust proxy', 1)
app.use(session({
	secret: 'xyyvuyhfresi2iyd8f', //clé unique
	resave: false,
	saveUninitialized: true,
	cookie : { 
	secure: false, //false si http, true si https
	expires : new Date('2023-12-31')
	} 
}))

/*****
 * MIDDLEWARS
 * *****/

app.use(require('./middlewares/user'))


//port
app.listen(8080)