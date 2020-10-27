const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    subject1: {
        type: String,
        required: true
    },
    sub_1_Present: {
        type: String,
        required: true,
    },
    sub_1_Absent: {
        type: String,
        required: true,
    },
    sub_1_Total: {
        type: String,
        required: true,
    },

    subject2: {
        type: String,
        required: true
    },
    sub_2_Present: {
        type: String,
        required: true,
    },
    sub_2_Absent: {
        type: String,
        required: true,
    },
    sub_2_Total: {
        type: String,
        required: true,
    },

    subject3: {
        type: String,
        required: true
    },
    sub_3_Present: {
        type: String,
        required: true,
    },
    sub_3_Absent: {
        type: String,
        required: true,
    },
    sub_3_Total: {
        type: String,
        required: true,
    },
    
    subject4: {
        type: String,
        required: true
    },
    sub_4_Present: {
        type: String,
        required: true,
    },
    sub_4_Absent: {
        type: String,
        required: true,
    },
    sub_4_Total: {
        type: String,
        required: true,
    },
    
    prof_name: {
        type: String,
    }
},
    { timestamp: true }
);

module.exports = mongoose.model('Report', reportSchema);