//this includes the Schedule Schema used when making HTTP calls

//all fields are set to be required while posting and updating the data 

var mongoose = require('mongoose');

// Create the ScheduleSchema.
var ScheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    machine: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    
    purpose: {
        type: String,
        required: true
    },
    
    startDate: {
        type: String,
        required: true
    },
    
    endDate: {
        type: String,
        required: true
    }
    
});

// Export the model.
module.exports = mongoose.model('schedule', ScheduleSchema);