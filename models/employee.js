var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empid:{
        type:Number,
        default: ''
    },  
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    vehicle_no:{
        type: String,
        required: true
    }
});






Employees= mongoose.model('Employee', EmployeeSchema);
module.exports = Employees