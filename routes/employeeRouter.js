var express = require('express');
var Employees = require('../models/employee');
const fetch = require("node-fetch");
const axios =require('axios');
const config =require('../config');

const router = express.Router();



router.get('/', async(req,res,next) => {
    
      
  try{

      const employee = await Employees.find({})
 
      res.send({employee});
  }
  catch(error) {
   res.status(404).json({ message: 'Employee Not Found.' });
  }
})




  router.post('/',async (req, res) => {


  
    var employee = new Employees({
       empid:req.body.empid,
      
       name:req.body.name,
       phone:req.body.phone,
       address:req.body.address,
       vehicle_no:req.body.vehicle_no
      
     })
   
   
     console.log("employee"+employee)
     try{
       const newEmployee = await employee.save();
       console.log(newEmployee)
   
       if (newEmployee) {
            res
             .status(201)
             .send({ message: 'new employee added Successfully'});
         }
     }
      catch(error)
    {
       res.send({ message: 'Employee not added' });
    }
     
     });


     router.put('/',async(req , res) => {
        
        const empid= req.body.updatedempid
        const emp= await Employees.findOne({empid:empid});
        if (emp) {
         emp.phone=req.body.updatedphone;
         emp.address=req.body.updatedaddress;
         emp.vehicle_no=req.body.updatedvehicle_no;
         
          const updatedemp = await emp.save();
          res.send({
           empid: updatedemp.empid,
           phone: updatedemp.phone,
           address: updatedemp.address,
           vehicle_no: updatedemp.vehicle_no
          });
        } else {
          res.status(404).send({ message: 'Employee Not Found' });
        }
      })

      router.put('/delete', async(req, res)=> {
        const empid= req.body.empid
        console.log(empid)

        if(empid)
        {
          const emp= await Employees.findOne({empid:empid});
       
        const deletedemp = await emp.delete();
        res.status(200).send({ message: 'Employee deleted' });
        }
        else
        {
          res.status(404).send({ message: 'Employee Not Found' });
        }
      
        })
      
module.exports=router;