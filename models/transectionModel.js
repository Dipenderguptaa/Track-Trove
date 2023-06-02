const mongoose = require('mongoose');
// import moment from "moment";

const transectionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    Category: {
        type: String,
        required: [true, 'Category is required']
    },
    Refrence: {
        type: String,
    },
    Description: {
        type: String,
        required: [true, 'Description of the transection is requird']
    },
    Date: {
        type: Date,
        required: [true, 'Date of transection is required']
    },
}, { timestamps: true });

const transectionModel = mongoose.model('transections', transectionSchema);
module.exports = transectionModel;