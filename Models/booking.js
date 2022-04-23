const mongoose= require('mongoose');

const bookingschema = mongoose.Schema({
    hotelid:{
        type:Number,
        required:true
    },
    customername:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    startdate:{
        type:Date,
        required:true
    },
    enddate:{
        type:Date,
        required:true
    },
    roomid:{
        type:Number,
        required:true
    }
    
},
{
    timestamps:true
})

const bookmodel = mongoose.model('bookings',bookingschema)

module.exports=bookmodel