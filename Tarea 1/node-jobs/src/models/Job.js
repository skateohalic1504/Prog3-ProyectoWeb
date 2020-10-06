const mongoose = require('mongoose');
const { Schema } = mongoose;


const JobSchema = new Schema({
    company: {type: String, require: true},
    tipo: {type: String, require: true},
    logo: {type: String},
    url: {type: String},
    position: {type: String, require: true},
    location: {type: String, require: true},
    category: {type: String, require: true},
    description: {type: String, require: true},
    date: {type: Date, default: Date.now},
    user: {type: String}

    
});


module.exports = mongoose.model('Job', JobSchema);