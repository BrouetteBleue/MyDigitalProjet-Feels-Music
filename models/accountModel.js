'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Account object create
var Account = function(account){
  this.role           = account.role ? account.role : 'user';
  this.pseudo         = account.pseudo;
  this.password       = account.password;
  this.phone          = account.phone;
  this.email          = account.email;
  this.country        = account.country;
  this.photo          = account.photo;
  this.insta          = account.insta;
  this.open_to_work   = account.open_to_work;
  this.created_at     = new Date();
  this.modified       = new Date();
};

Account.create = function (newAcc, result) {
    dbfeelsmusic.query("INSERT INTO account set ?", newAcc, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Account.findById = function (id, result) {
    dbfeelsmusic.query("Select * from account where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Account.findAll = function (result) {
    dbfeelsmusic.query("Select * from account", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('account : ', res);
            result(null, res);
        }
    });
};

Account.update = function(id, account, result){
    dbfeelsmusic.query("UPDATE account SET pseudo=?,password=?,phone=?,email=?,country=?,photo=?,insta=?,open_to_work=? WHERE id = ?", [account.pseudo,account.password,account.phone,account.email,account.country,account.photo,account.insta,account.open_to_work, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Account.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM account WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Account;