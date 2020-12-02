import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import { Link } from 'react-router-dom';
import Cookie, { set } from 'js-cookie'
import baseurl from '../baseurl'



function Employee()
{
    const [empid, setempid] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [vehicle_no, setvehicle_no] = useState('');
    const [data4, setdata4] = useState('');

    const [updatedempid, setupdatedempid] = useState('');
    const [updatedphone, setupdatedphone] = useState('');
    const [updatedaddress, setupdatedaddress] = useState('');
    const [updatedvehicle_no, setupdatedvehicle_no] = useState('');
    const [delempid, setdelempid] = useState('');

    const[isOpen1,togglemodal1]=useState(false)
    const[isOpen3,togglemodal3]=useState(false)
    function handlemodal1()
    {
      window.location.reload(false)
      togglemodal1(!isOpen1)
     
    }
    const[isOpen2,togglemodal2]=useState(false)
    
    function handlemodal2()
    {
      togglemodal2(!isOpen2)
      window.location.reload(false)
    }
    function handlemodal3()
    {
      togglemodal3(!isOpen3)
      window.location.reload(false)
    }
   
    async function handleSubmit1(e)
    {
        e.preventDefault();
        
       
        const {data}= await axios.post(`${baseurl}/adminemployee/`, {empid,name,phone,address,vehicle_no})
    
        console.log(data)
    
     
        handlemodal1()
       
    }
    async function handleSubmit3(e)
    {
        e.preventDefault();
        
       
      
        const {data}= await axios.put(`${baseurl}/adminemployee/delete`, {empid:delempid})
    
        console.log(data)
    
     
        handlemodal3()
       
    }

    
    async function handleSubmitupdate(e)
    {
        e.preventDefault();
        
       
        const {data}= await axios.put(`${baseurl}/adminemployee/`, {updatedempid,updatedphone,updatedaddress,updatedvehicle_no})
    
    
        handlemodal2();
       
    }
   

    useEffect(() => {
      const fetchusers=async()=>
      {
 
     try{
     const data1=await axios.get(`${baseurl}/adminemployee`)
     var data2=data1.data
     data2=data2.employee
     console.log(data2)
     var d3=[]
     var dat=data2.map((item)=>
     {
       var d4={"Employeeid":item.empid}
      
       d4.name=item.name
       d4.phone=item.phone
     
       d4.address=item.address
       d4.vehicle_no=item.vehicle_no
       d3.push(d4)
     }) 
    setdata4(d3)
     }
     catch(error)
     {
       console.log("no users")
     }
      
    }
    fetchusers()
   },[])
   
   
    if(data4)
  { const  getKeys = function(){
        return Object.keys(data4[0]);
        }
     
        const getHeader = function(){
            var keys = getKeys();
          
            return keys.map((key)=>{
              
            return <th key={key}>{key.toUpperCase()}</th>
            })
            }
            var x=1
            var k=[]
           const RenderRow = (props) =>{  
             
             k= props.keys.map((key, index)=>{
               
           return <td  key={props.data[key]}>{props.data[key]}</td> })
           return k
         }
           const getRowsData = function(){
            var items = data4;
            var keys = getKeys();
            return items.slice(0).reverse().map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
            }
        

        return (
          <>
          
          <nav className="navbar navbar-dark bg-dark mb p-2">

            <div className="container" style={{color:"white"}}>
            <div className="col-3  col-sm-1 nav-item"><a href="/admin" className="text-white"><span className="fa fa-home fa-lg btn-white" style={{cursor:"pointer"}} >Home</span></a></div>
                <div className=" col-9  col-sm-7 nav-item"><h4>Sri Balaji Stores</h4></div>
            </div>
          </nav>
          <div className="bg-primary p-2 mb-4" style={{color:"white"}}>
            <div className="col-12">
           
            <h2 style={{textAlign:"center"}}> <span className="fa fa-users"></span> Employees</h2>
            </div>
          </div>


       

<section id="actions" className="py-4 mb-4" style={{color:"black"}}>
    <div className="container  text-align-center">
      <div className="row justify-content-center">
        <div className=" offset-1  col-7 offset-md-0 col-md-3">
          <a href="#" className="btn  btn-primary admin-btn  mb-2 p-1 btn-block"  onClick={togglemodal1}>
            <i className="fa fa-plus"></i> Add Employee
          </a>
        </div>
        <div className=" offset-1  col-7 offset-md-0  col-md-3">
          <a href="#" className="btn admin-btn  btn-success   mb-2 p-1 btn-block" onClick={togglemodal2}>
            <i className="fa fa-edit"></i> Edit Employee Details
          </a>
        </div>
        <div className=" offset-1   col-7  offset-md-0 col-md-3">
          <a href="#" className="btn  btn-warning  admin-btn p-1 btn-block" onClick={togglemodal3}>
            <i className="fa fa-remove"></i> Delete Employee
          </a>
        </div>
        
      </div>
    </div>
  </section>

  <div className="table table-striped table-bordered container table-hover table-responsive">
            <table className="m-auto">
            <thead className="thead-dark">
            <tr>{getHeader()}</tr>
            </thead>
            <tbody>
            {getRowsData()}
            </tbody>
            </table>
        </div>

            <div className='container'>
    <Modal isOpen ={isOpen1} toggle={handlemodal1}>
        <ModalHeader className='modal-text' toggle={handlemodal1} > <strong>ADD EMPLOYEE</strong> </ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit1}>
                <FormGroup>
                    <Label htmlFor='name'><strong>Employee Name</strong> </Label>
                    <Input type='text' name='name'  placeholder='Employee-Name'  onChange= {(e)=> setname(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='empid'> <strong>EMPLOYEE-ID</strong></Label>
                    <Input type='text' name='empid'   placeholder="Employee-Id" onChange={(e)=>setempid(e.target.value)} ></Input>
                   
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='phone'> <strong>PHONE NUMBER</strong></Label>
                    <Input type='text' name='phone'  placeholder='Phone-Number' onChange={(e)=> setphone(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='address'> <strong>ADDRESS</strong></Label>
                    <Input type='text' name='address'   placeholder='Address' onChange={(e)=>setaddress(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='vehicle_no'> <strong>VEHICLE NUMBER</strong></Label>
                    <Input type='text' name='vehicle_no'  placeholder='Vehicle-Number' onChange={(e)=>setvehicle_no(e.target.value)}></Input>
                </FormGroup>
               <FormGroup className='offset-3  col-8  offset-sm-4 col-sm-8 '>
                    <Button  className="p-2" type='submit' value='submit' color='primary'><span className='fa fa-paper-plus fa-lg' ></span>ADD EMPLOYEE</Button>
                </FormGroup>
            </Form>
        </ModalBody>
    </Modal>
    </div>


    <div className='container'>
        <Modal isOpen ={isOpen2} toggle={handlemodal2} className="modal-modal-dialog-center">
            <ModalHeader className='modal-text' toggle={handlemodal2} > <strong>EDIT EMPLOYEE DETAILS</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmitupdate}>
                    <FormGroup>
                        <Label htmlFor='updatedempid'> <strong>EMPLYOEE-ID</strong></Label>
                        <Input type='text' name='updatedempid' placeholder="Employee-Id" onChange={async(e)=>await setupdatedempid(e.target.value)} ></Input>
                       
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='updatedphone'> <strong>PHONE NUMBER</strong></Label>
                        <Input type='text' name='updatedphone'  placeholder='Phone Number' onChange={async(e)=>await setupdatedphone(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='updatedaddress'> <strong>ADDRESS</strong></Label>
                        <Input type='text' name='updatedaddress'  placeholder='Address' onChange={async(e)=>await setupdatedaddress(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='updatedvehicle_no'> <strong>VEHICLE NUMBER</strong></Label>
                        <Input type='text' name='updatedvehicle_no'  placeholder='Vehicle Number' onChange={async(e)=>await setupdatedvehicle_no(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className='offset-2  col-8  offset-sm-3 col-sm-8 '>
                        <Button  className="p-2" type='submit' value='submit' color='primary' onClick={handleSubmitupdate}><span className='fa fa-paper-plus fa-lg' ></span>EDIT EMPLOYEE DETAILS</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
       
        </div>

        <div className='container'>
        <Modal isOpen ={isOpen3} toggle={handlemodal3} className="modal-modal-dialog-center">
            <ModalHeader className='modal-text' toggle={handlemodal3} > <strong>DELETE EMPLOYEE DETAILS</strong> </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit3}>
                    <FormGroup>
                        <Label htmlFor='delempid'> <strong>EMPLYOEE-ID</strong></Label>
                        <Input type='text' name='delempid' placeholder="Employee-Id" onChange={async(e)=>await setdelempid(e.target.value)} ></Input>
                       
                    </FormGroup>
                   
                    <FormGroup className='offset-2  col-8  offset-sm-3 col-sm-8 '>
                        <Button  className="p-2" type='submit' value='submit' color='primary' onClick={handleSubmit3}><span className='fa fa-paper-plus fa-lg' ></span>DELETE EMPLOYEE DETAILS</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
       
        </div>
            

            <footer id="main-footer" class="bg-dark text-white mt-5 p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="lead text-center">
            Copyright &copy;
            <span id="year">2020  </span>
               Sri Balaji Stores
          </p>
        </div>
      </div>
    </div>
  </footer>
            
          </>
            
            );
        }

      else{
        return(
          <div>Loading</div>
        )
      }
       
}

export default Employee;