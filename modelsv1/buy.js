// /models/buy.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Buy {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._id_account = null 
			this._id_prod = null 
			this._total = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._id_prod = d._id_prod
			this._id_account = d._id_account
			this._total = d._total
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
	get total(){
		return this._total
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
	get total(){
		this._total = x
    }
	set created(x){
		this._created = x
	}
	set modified(x){
		this._modified = x
	}

	//
	static all(callback){
		db.query('SELECT * FROM buy', function(err, datas){
				callback( datas.map( (d) => new Buy(d)) )
			})
	}

	static create(id_account, id_prod, total, callback){
		console.log(platform)
		db.query('INSERT INTO buy (id_account, id_prod, total) VALUES (?, ?, ?)', [id_account, id_prod, total], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Buy