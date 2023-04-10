// /models/categorie.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Categorie {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._name = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._name = d.name
			this._created = d.created
			this._modified = d.modified
		}
	}

	get id(){
		return this._id
	}
	get name(){
		return this._name
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
	get name(){
		this._name = x
	}
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM categorie ORDER BY name', function(err, datas){
				callback( datas.map( (d) => new Categorie(d)) )
			})
	}

	static create(name, callback){
		console.log(platform)
		db.query('INSERT INTO categorie (name) VALUES (?, ?, ?)', [name], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Categorie