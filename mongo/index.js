var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/EDCAN');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  name : {type : String},
  Student_id : {type : String},
  Phone_number : {type : String},
  email : {type : String},
  Introduce : {type : String}, // 소개
  Motive : {type : String}, // 동기
  Ability : {type : String}, //  능력
  portfolio: {type: Boolean}
});
Users = mongoose.model("users", UsersSchema);

exports.Users = Users;
