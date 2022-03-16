const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const UserSchema = new Schema({
    name: {type:String},
    phone:{type:String},
    birthday:{type:String}

});

module.exports=User=mongoose.model('User', UserSchema);