// /models/compte.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Compte {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._role = null
			this._pseudo = null
			this._password = null
			this._phone = null
			this._email = null
			this._country = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._role = d.role
			this._pseudo = d.pseudo
			this._password = d.password
			this._phone = d.phone
			this._email = d.email
			this._country = d.country
			this._created = d.created
			this._modified = d.modified
		}
	}

	get id(){
		return this._id
	}
	get role(){
		return this._role
	}
	get pseudo(){
		return this._pseudo
	}
	get password(){
		return this._password
	}
	get phone(){
		return this._phone
	}
	get email(){
		return this._email
	}
	get country(){
		return this._country
    }
	get created(){
		return moment(this._created)
	}
	get modified(){
		return moment(this._modified)
	}

	set id(x){
		this._id = x
	}
	get role(){
		this._role = x
	}
	get pseudo(){
		this._pseudo = x
	}
	get password(){
		this._password = x
	}
	get phone(){
		this._phone = x
	}
	get email(){
		this._email = x
	}
	get country(){
		this._country = x
    }
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM compte ORDER BY created', function(err, datas){
				callback( datas.map( (d) => new Compte(d)) )
			})
	}

	static create(role, pseudo, password, phone, email, country, callback){
		console.log(platform)
		db.query('INSERT INTO compte (role, pseudo, password, phone, email, country) VALUES (?, ?, ?)', [role, pseudo, password, phone, email, country], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Compte