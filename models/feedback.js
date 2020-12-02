var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    name:{
        type:String,
        default: ''
    },  
    product_pricing:{
        type: String,
        required: true
    },
    delivery_service:{
        type: Number,
        required: true
    },
    ordering_process:{
        type: String,
        required: true
    },
    website_experience:{
        type: String,
        required: true
    },
    suggestion:{
        type:String
        
    }
});


Feedbacks= mongoose.model('Feedback', FeedbackSchema);
module.exports = Feedbacks