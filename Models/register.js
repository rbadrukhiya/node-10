const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var register = new Schema({
    email:({
        type:String,
        unique:true,
        required:true
        // min:10,
        // max:20
        // required:true,
        // upperCase:true,
        // lowercase:true

    })
})

const MyModel = mongoose.model('demo', register);

module.exports = MyModel
