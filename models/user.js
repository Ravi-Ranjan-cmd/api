var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wemail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  wpassword: {
    type: String,
    required: true,
    match: / ^(?=.*\d).{4,8}$ /
  },
  wname: {
    type: String,
    required: true,
    match: /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/
  },
  wdob: {
    type: Date,
    required: true,
checkForm()
{
  var errMessage = "";
    validateName();
    validateSurname();
    carSelect();
    validateDOB();
    if (errMessage == "") {
    } else {
        alert(errMessage);
    }
  },
validateDOB(){
    var dob = document.forms["ProcessInfo"]["txtDOB"].value;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (dob == null || dob == "" || !pattern.test(dob)) {
        errMessage += "Invalid date of birth\n";
        return false;
    }
    else {
        return true
    }
}
  },
  wage: {
    type: Number,
    required: true,
    match : /^[1-9]?[0-9]{1}$|^100$/
  },
  waddress: {
    type: String,
    required: true,
    validateAddress: function (val) {
      console.log('val: ' + val);
      var streetregex = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
      if ( streetregex.test(val) ) {
          console.log('true');
      } else {
          console.log('false');
      }
   }
  },
  wnearcity: {
    type: String,
    required: true,
    match:/^([a-zA-Z\u0080-\u024F]+(?:(\. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/
   },
  wstate: {
    type: String,
    required: true,
    match: /^([a-zA-z\s]{2,})$/
  },
  wpincode: {
    type: Number,
    required: true,
    match:/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
  },
  wmobile: {
    type: Number,
    required: true,
    match:/^([9]{1})([234789]{1})([0-9]{8})$/
  },
  woccupation: {
    type: String,
    required: true,
    match: /^([\s\S]){1,20}([\s\.])/
  },
  wexperience: {
    type: Number,
    required: true,
    match: /^([\s\S]){1,20}([\s\.])/
  },
  wskill: {
    type: String,
    required: true,
    match: /^([\s\S]){1,20}([\s\.])/
  },
  wSecQue: {
    type: String,
    required: true,
    match: /(?<=[\w\s](?:[\.\!\? ]+[\x20]*[\x22\xBB]*))(?:\s+(?![\x22\xBB](?!\w)))/
  },
  wSecAns: {
    type: String,
    required: true,
    match: /(?<=[\w\s](?:[\.\!\? ]+[\x20]*[\x22\xBB]*))(?:\s+(?![\x22\xBB](?!\w)))/
  },
  wadhaar: {
    type: Number,
    required: true,
    match:"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
  },
});
module.exports = mongoose.model('user', UserSchema);