const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    primary: {type: Int16Array, require: true},
    secondary: {type: Int16Array, require: true}
});

module.exports = mongoose.model('Category', CategorySchema);