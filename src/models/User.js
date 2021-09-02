const client = require('../database');



client.connect();

const database = client.db('uploadexample');
const Users = database.collection('users')

client.close();
/*const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
   // createdAt: {
//
     //   type: Date,
    //    default: Date.now,
    //}
}); */

//const User = mongoose.model('User', UserSchema);



module.exports = Users;