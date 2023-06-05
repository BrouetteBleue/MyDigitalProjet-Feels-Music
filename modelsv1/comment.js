// /models/comment.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Comment {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._id_account = null 
			this._id_prod = null 
			this._message = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._id_prod = d._id_prod
			this._id_account = d._id_account
			this._message = d._message
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
	get _id_prod(){
		return this._id_prod
	}
	get message(){
		return this._message
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
    get _id_prod(){
		this._id_prod = x
	}
	get message(){
		this._message = x
    }
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM comment ORDER BY created', function(err, datas){
				callback( datas.map( (d) => new Comment(d)) )
			})
	}

	static create(id_account, id_prod, message, callback){
		console.log(platform)
		db.query('INSERT INTO comment (id_account, id_prod, message) VALUES (?, ?, ?)', [id_account, id_prod, message], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Comment