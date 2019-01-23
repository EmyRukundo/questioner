 import db from './config/connect';

// const db = require('./config/connect');

exports.create =(req,res)=>{
	
	const newUser ={

		username:req.body.username,
		email:req.body.email,
		password:req.body.password,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		isadmin:true,
		othername:req.body.othername,

	};
	db.query('INSERT INTO users(username,email,password,firstname,lastname,isadmin,othername)'+'values($1,$2,$3,$4,$5,$6,$7)',
	[newUser.username, newUser.email,newUser.password,newUser.firstname,newUser.lastname,newUser.isadmin,newUser.othername])
	.then(users=>{
		res.json({message:'user created'});
	})
	.catch(error=>{
		console.log(error);
	})
}