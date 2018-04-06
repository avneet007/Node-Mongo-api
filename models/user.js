var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;

 //========= user details created in the schema  ==========

var userSchema = new Schema({

 
 email: { type: String, required: true },
 name: { type: String, required: true },
 
 
});

 
var user = mongoose.model('users', userSchema);

module.exports = user;