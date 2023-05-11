// /models/chat.js

let db = require('../config/database')
let moment = require('moment')
moment.locale('fr')

class Chat {
    
	constructor(d){
		if(d== null){
			this._id = null
			this._id_compte = null //(expediteur)
			this._id_compte_2 = null //(destinataire)
			this._message = null
			this._created = null
			this._modified = null
		}else{
			this._id = d.id
			this._id_compte = d._id_compte
			this._id_compte_2 = d._id_compte_2
			this._message = d._message
			this._created = d.created
			this._modified = d.modified
		}
	}

	get id(){
		return this._id
	}
	get id_compte(){
		return this._id_compte
	}
	get id_compte_2(){
		return this._id_compte_2
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
    get id_compte(){
		this._id_compte = x
	}
    get id_compte_2(){
		this._id_compte_2 = x
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
		db.query('SELECT * FROM chat', function(err, datas){
				callback( datas.map( (d) => new Chat(d)) )
			})
	}

	static create(id_compte, id_compte_2, message, callback){
		console.log(platform)
		db.query('INSERT INTO chat (id_compte, id_compte_2, message) VALUES (?, ?, ?)', [id_compte, id_compte_2, message], (err, res) => {
			callback(res)
		})
	}
}

module.exports = Chat