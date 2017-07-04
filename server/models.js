const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// const userSchema = mongoose.Schema({
//   // googleId: '',
//   // accessToken: '',
//   username: String,
//   password: String
// });

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  }
});
 // Job 1: Set up Mongo/Mongoose, create a User model which store the
        // google id, and the access token
        // Job 2: Update this callback to either update or create the user
        // so it contains the correct access token
//save the userSchema before being sent

// userSchema.pre('save', next => {
//   const user = this;
//   if(!user.isModified('password')) return next();
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, null, (err, hash) => {
//       if(err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.checkPassword = password => {
//   return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('User', userSchema)

module.exports = User;

