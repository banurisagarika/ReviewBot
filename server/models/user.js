// // const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //   username: {
// //     type: String,
// //     required: true,
// //     unique: true, // Ensure usernames are unique
// //   },
// //   password: {
// //     type: String,
// //     required: true,
// //   },
// // });

// // const User = mongoose.model('User', userSchema);

// // module.exports = User;


// const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const userSchema = new mongoose.Schema({

//     userId:{
//         type:Number,
//         // required:true,
//         // unique:true
//     },
//     username:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },

// })

// userSchema.plugin(AutoIncrement, { inc_field: 'UserId' });

// const userModel = mongoose.model('user',userSchema);

// module.exports = userModel;


const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash the password before saving the user
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
// });

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
