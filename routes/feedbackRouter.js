var express = require('express');
var Feedbacks = require('../models/feedback');

const router = express.Router();


router.post('/',async (req, res) => {


  
    var feedback = new Feedbacks({
       name:req.body.name,
      
       product_pricing:req.body.rating,
       delivery_service:req.body.rating1,
       ordering_process:req.body.rating2,
       website_experience:req.body.rating3,
       suggestion:req.body.suggestion
      
     })
   
   
    
     try{
       const newFeedback = await feedback.save();
       console.log(newFeedback)
   
       if (newFeedback) {
            res
             .status(201)
             .send({ message: 'new feedback Successfully'});
         }
     }
      catch(error)
    {
       res.send({ message: 'feedback not added' });
    }
     
     });
router.get('/', async(req,res,next) => {
    
      
      try{
   
          const feedbacks = await Feedbacks.find({})
     
          res.send({feedbacks});
      }
      catch(error) {
       res.status(404).json({ message: 'feedback not founds' });
      }
    })
  
 module.exports=router;