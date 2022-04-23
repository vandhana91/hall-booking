const express = require("express");
const router = express.Router();

const app = express();

const room = require('../Models/room')

router.get("/getallrooms",async(req,res)=>{
    try{
        const rooms = await room.find({})
        return res.send(rooms)
    }
    catch(error){
        return res.status(400).json({message:error})
    }

})

module.exports=router;