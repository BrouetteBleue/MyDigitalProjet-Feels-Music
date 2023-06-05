// /models/prod.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Prod {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._id_account = null
			this._id_categorie = null
			this._title = null
			this._sound = null
			this._cover = null
			this._description = null
			this._price = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._id_account = d._id_account
			this._id_categorie = d._id_categorie
			this._title = d._title
			this._sound = d._sound
			this._cover = d._cover
			this._description = d._description
			this._price = d._price
			this._created = d.created
			this._modified = d.modified
		}
	}

	get id(){
		return this._id
	}
	get id_account(){
		return this._id_account
	}
	get id_categorie(){
		return this._id_categorie
	}
	get title(){
		return this._title
	}
	get sound(){
		return this._sound
	}
	get cover(){
		return this._cover
	}
	get description(){
		return this._description
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
    get id_account(){
		this._id_account = x
	}
	get id_categorie(){
		this._id_categorie = x
	}
	get title(){
		this._title = x
	}
	get sound(){
		this._sound = x
	}
	get cover(){
		this._cover = x
	}
	get description(){
		this._description = x
    }
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM prod ORDER BY title', function(err, datas){
				callback( datas.map( (d) => new Prod(d)) )
			})
	}

	static create(id_account, id_categorie, title, sound, cover, description, callback){
		console.log(platform)
		db.query('INSERT INTO prod (id_account, id_categorie, title, sound, cover, description) VALUES (?, ?, ?)', [id_account, id_categorie, title, sound, cover, description], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Prod