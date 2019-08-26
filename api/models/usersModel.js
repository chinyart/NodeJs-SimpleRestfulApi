'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    surname: {
        type: String,
        required: 'Kindly enter the surname of the user'
    },
    firstname: {
        type: String,
        required: 'Kindly enter the first name of the user'
    },
    age: {
        type: Number,
        required: 'Kindly enter the age of the user'
    },
    position: {
        type: String,
        required: 'Kindly enter the position of the user'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'unactive']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Users', UserSchema);

