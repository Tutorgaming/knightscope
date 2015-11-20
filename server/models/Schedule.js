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
        required: false
    },
    
    purpose: {
        type: String,
        required: false
    },
    
    startDate: {
        type: Date,
        required: false
    },
    
    endDate: {
        type: Date,
        required: false
    }
    
});

// Export the model.
module.exports = mongoose.model('schedule', ScheduleSchema);