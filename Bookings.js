const mongoose =  require('mongoose');

const bookingsSchema = new mongoose.Schema({
    movie:{
        type:String,
        required: true
    },
    seat:{
        type:String,
        required: true,
        
    },

    slot:{
        type:String,
        required: true,
    }

});

module.exports = mongoose.model("Bookings",bookingsSchema);