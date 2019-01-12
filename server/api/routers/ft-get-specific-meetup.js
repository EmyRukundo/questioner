const express = require('express');
const router = express.Router();

var sourceFile = require('./ft-get-all-meetups');



 router.get('/:id',(req,res) =>{

   const findedMeetup = sourceFile.find(c => c.id === parseInt(req.params.id, 10));
   if(!findedMeetup){
   	res.status(404).json({
   		status: 404,
   		data: ` not found ${req.params.id } `
   	});

   } else{
   	res.status(200).json({
		status: 200,
		data: findedMeetup
	});
   }
});


module.exports=router;
