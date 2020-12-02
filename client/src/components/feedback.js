import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Cookie from 'js-cookie'
import baseurl from '../baseurl'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';

function Feedback()
{
    const [rating,setRating]= useState(null);
    const [rating1,setRating1]= useState(null);
    const [rating2,setRating2]= useState(null);
    const [rating3,setRating3]= useState(null);
    const [suggestion,setsuggestion]=useState(null);

    const [hover, setHover]= useState(null);
    const [hover1, setHover1]= useState(null);
    const [hover2, setHover2]= useState(null);
    const [hover3, setHover3]= useState(null);

    const [isSuccessOpen5 , setSuccessOpen5] = useState(false);
    function toggleSuccessModal5(prevState) {
        setSuccessOpen5(!isSuccessOpen5)
    } 

    
    var signup="SignIn"
 
    var logincoookie=(Cookie.getJSON('login'))||false
    console.log(logincoookie)
    if(logincoookie)
    {
      console.log("bye")
      const logintype=(Cookie.getJSON('modeoflogin'))||''
      if(logintype==="normal")
      {const signup1=(Cookie.getJSON('userInfo'))||{name:"SignIn"}
      signup=signup1.name}
  
     
      else
      {
        const signup1=(Cookie.getJSON('userInfo'))||{user:{name:"SignIn"}}
        signup=signup1.user.name
      }
    }
    const [isOpen, setSide] = useState(false)
    function handleClick()
    {
      setSide(!isOpen)
    }
    function logout()
  {
      localStorage.clear()
      Cookie.remove('userInfo')
      Cookie.remove('modeoflogin')
      Cookie.remove('login')
     // localStorage.setItem('login',JSON.stringify(false))
   
      window.location.reload(false)
      
  }
let name=signup

  async function handleSubmit(e)
    {
        e.preventDefault();
        
       
        const {data}= await axios.post(`${baseurl}/userfeedback`, {name,rating,rating1,rating2,rating3,suggestion})
    
        if(data)
        {
            setRating(0)
            setRating1(0)
            setRating2(0)
            setRating3(0)
            setsuggestion(null)
            
            toggleSuccessModal5()
        }
      
    
     
       
       
    }
  const stars=[...Array(5)].map((star, i) => {
    const ratingValue = i + 1;

      return(
          <label>
            <div className="stars">
              <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={()=> setRating(ratingValue)}
             
              />
              <FaStar className="star" color={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"} size={25}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
              />
          </div>

          </label>
      
      );
  }
  )
  const stars1=[...Array(5)].map((star, i) => {
    const ratingValue1 = i + 1;
    
      return(
          <label>
          <div className="stars1">
              <input
              type="radio"
              name="rating"
              value={ratingValue1}
              onClick={()=> setRating1(ratingValue1)}
              
              />
              <FaStar className="star" color={ratingValue1 <= (hover1 || rating1)  ? "#ffc107" : "#e4e5e9"} size={25}
              onMouseEnter={()=> setHover1(ratingValue1)}
              onMouseLeave={()=> setHover1(null)}
              
              />
          </div>

          </label>
      
      );
  }
  )
  const stars2=[...Array(5)].map((star, i) => {
    const ratingValue2 = i + 1;
    
      return(
          <label>
          <div className="stars2">
              <input
              type="radio"
              name="rating"
              value={ratingValue2}
              onClick={()=> setRating2(ratingValue2)}
              
              />
              <FaStar className="star" color={ratingValue2 <= (hover2 || rating2)  ? "#ffc107" : "#e4e5e9"} size={25}
              onMouseEnter={()=> setHover2(ratingValue2)}
              onMouseLeave={()=> setHover2(null)}
              
              />
          </div>

          </label>
      
      );
  }
  )
  const stars3=[...Array(5)].map((star, i) => {
    const ratingValue3 = i + 1;
    
      return(
          <label>
          <div className="stars3">
              <input
              type="radio"
              name="rating"
              value={ratingValue3}
              onClick={()=> setRating3(ratingValue3)}
              
              />
              <FaStar className="star" color={ratingValue3 <= (hover3 || rating3)  ? "#ffc107" : "#e4e5e9"} size={25}
              onMouseEnter={()=> setHover3(ratingValue3)}
              onMouseLeave={()=> setHover3(null)}
              
              />
          </div>

          </label>
      
      );
  }
  )
 

   





  
    return(
       <>
          <Menu className="sidebar" isOpen={ isOpen } customBurgerIcon={false}>
    <div className="container">
      <div className="row">
      <div className="col-12 navtop"><div className="row"><div className="offset-1 col-7">{logincoookie?(<p  style={{cursor:"pointer"}}><span className="fa fa-user" style={{marginRight:"2px"}}></span>{signup}</p>):(<a href="/signup"><p  style={{cursor:"pointer"}}><span className="fa fa-sign-in"></span>Signin</p></a>)}</div><p onClick={handleClick} className=" col-2 fa fa-arrow-left "style={{cursor:"pointer"}}></p></div></div>
   <div className="side-items">
   <div className="col-12 container"><a href ='/home'className="menu-item row"><span className="fa fa-home fa-lg offset-1 offset-sm-2  offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2  col-7 col-sm-6">Home</span></a></div> 
   <div className="col-12 container" onClick={()=>setSide(false)}><a href ='home#accordian'className="menu-item row"><span className="fa fa-th-large fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> Categories</span></a></div> 
   <div className="col-12 container"><a href ='/myorders'className="menu-item row"><span className="fa fa-th-list fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6">  MyOrders</span></a></div> 
   <div className="col-12 container"><a href ='/myaccount'className="menu-item row"><span className="fa fa-user fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> MyAccount</span></a></div> 
   <div className="col-12 container"><a href ='/aboutus'className="menu-item row"><span className="fa fa-info fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> AboutUs</span></a></div> 
   <div className="col-12 container"><a href ='/developedby'className="menu-item row"><span className="fa fa-connectdevelop fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> DevelopedBy</span></a></div> 
   <div className="col-12 container"><a onClick={logout} style={{cursor:"pointer"}} className="menu-item row"><span className="fa fa-sign-out fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> LogOut</span></a></div> 

 
   </div>
 </div>
 </div>
</Menu>

<div className="container">
    <Modal className='success-modal modal-width' isOpen = {isSuccessOpen5} toggle={toggleSuccessModal5}>
            <ModalHeader toggle={toggleSuccessModal5} className='success-modal-text text-center'> <p><strong> Thank You!!</strong></p> </ModalHeader>
            <ModalBody>
                
                    <p>Feedback Submitted <img src={`${process.env.PUBLIC_URL}/images/tick.png`} className="icons" alt="icons"/></p>
                                             
                
            </ModalBody>
        </Modal>
    </div> 

<nav className="navbar fixed-top navbar-light bg-dark">
<a className="navbar-brand"  onClick={handleClick}><span className="fa fa-bars fa-lg navicon" style={{color:"white"}}></span>

</a>

<ul className="navbar-nav">
<li className="nav-item col-1 col-lg-5">
 <a className="nav-link" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
</a>
</li>
  
</ul>
<span className="nav-item col-7 col-lg-7 font-name">Sri Balaji Stores</span>
</nav>

<div className="container spacingforheader"> 
<div className="row">
    <div className="col-12">bye</div>
    <div className="col-12">        
    ..
    </div>
    <div className="col-12"></div>
    <div className="col-12"></div><div className="col-12"></div>
  
</div>
</div>

    <div className="container feedback-cont">
     <div className='col-12 offset-lg-2 col-lg-8'>
            <Card className='feedback-card'>
                <CardHeader className='feedback-head text-center"'>
                   
                        <h  style={{fontSize:'2rem'}}><strong>Customer Feedback</strong></h>
                       
                </CardHeader>
                <CardBody className='feedback-card-head'>
                    <Form>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1 col-lg-6'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Product Pricing</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4 col-lg-4'>        
                                {stars}
                                </div>
                            </div>
                        </FormGroup>
                
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1 col-lg-6'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Delivery Service</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4 col-lg-4'>
                                  {stars1}   
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1 col-lg-6'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Ordering process</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4 col-lg-4'>
                                  {stars2}
                                </div>
                            </div>
                        </FormGroup> 
                        <FormGroup>
                            <div className='row'>
                                <div className='col-4 col-sm-4  offset-sm-1 col-lg-6'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Website Experience</strong></Label>
                                </div>
                                <div className='col-8 col-sm-4 col-lg-4'>
                                {stars3}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-8 col-sm-8 offset-lg-4 offset-2  col-lg-8'>
                                    <Label htmlFor='name' style={{fontSize:'20px'}}><strong>Any Suggestion?</strong></Label>
                                </div>
                              
                                 <textarea className='col-8 col-sm-8 offset-lg-3 offset-2 col-lg-6 offset-sm-0' value={suggestion}onChange={(e)=>setsuggestion(e.target.value)}>
                                   
                                 </textarea>
                                 

                                
                              
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className='row'>
                                <div className='col-6  offset-4 col-sm-10 offset-lg-5 offset-sm-1'>
                                <Button className="button btn-feedback"  onClick={handleSubmit}>
                                    Submit
                                 
                                </Button>
                                </div>
                            </div>
                        </FormGroup>
                        
                        
                        
                      
                    
                
                    </Form>
                </CardBody>
            </Card>
            
</div>
</div>

  

       </>
    )
}
export default Feedback