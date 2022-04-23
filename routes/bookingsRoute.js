const express = require("express");
const router = express.Router();

const app = express();

const booking = require('../Models/booking')

router.get("/getallbookings",async(req,res)=>{
    try{
        const rooms = await booking.find({})
        return res.send(rooms)
    }
    catch(error){
        return res.status(400).json({message:error})
    }

})

module.exports=router;