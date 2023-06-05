// /models/follow.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Follow {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._id_account = null 
			this._id_prod = null 
			this._created = null
		}else{
			this._id = d.id
			this._id_prod = d._id_prod
			this._id_account = d._id_account
			this._created = d.created
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
	get created(){
		return moment(this._created)
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
	set created(x){
		this._created = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM follow ORDER BY created', function(err, datas){
				callback( datas.map( (d) => new Follow(d)) )
			})
	}

	static create(id_account, id_prod, callback){
		console.log(platform)
		db.query('INSERT INTO follow (id_account, id_prod) VALUES (?, ?, ?)', [id_account, id_prod], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Follow