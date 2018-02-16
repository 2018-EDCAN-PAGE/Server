var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/EDCAN');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  name : {type : String},
  Student_id : {type : String},
  Phone_number : {type : String},
  email : {type : String},
  Introduce : {type : String},
  Motive : {type : String},
  Ability : {type : String},
  portfolio : {type : String}
});
Users = mongoose.model("users", UsersSchema);

exports.Users = Users;
