const mongoose= require('mongoose');
var mongoURL='mongodb+srv://vandhana91:justice786@cluster0.rngab.mongodb.net/mern-rooms';
mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error',()=>{ 
    console.log('MongoDB connection error')
})

db.on('open',()=>{ 
    console.log('MongoDB connection successful')
})
module.exports=mongoose;