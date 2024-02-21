const express = require("express");
const router = express.Router();
const Bookings = require('./model/bookings');

let bookings =[] ;

router.post('/booking',(req,res)=>{
    const {movie, seats,slot} = req.body;
    res.status(200).send('Ok');
   let booking= new Bookings({movie,seats,slot});
   bookings.push(booking);
});

router.get('/booking',(req,res)=>{
   res.send(bookings[bookings.length-1]);
})
module.exports = userRoutes; 