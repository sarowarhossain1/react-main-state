import React, { useState } from 'react'
import FormAdd from './FormAdd';

const FormInfo = () => {
    const [state, setState]= useState([]);
    const [name, setName]=useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")

    const handleOnChange = (event)=>{
        //  const {id,value}= event.target;
        //  if(id === "name") setName(value);
        //  else if(id === "email")setEmail(value);
        //  else if(id === "password")setPassword(value)
       event.preventDefault(handleOnChange) 
       
    }
      const handleSubmit = (event) =>{
        event.preventDefault();
        if(name && email && password){
            const user = {
                name,
                email,
                password
            }
            setState([...state, user])
            
        }
      }
      console.log(state)
  return (
    <div > 
       <div>
      <form onSubmit={handleSubmit}   style={{boxShadow:"0px 0px 6px #DDD",backgroundColor:"	#ffcccc", width:"450px",height:"330px", paddingTop:"50px"}}>
              <p style={{fontSize:"21px", fontWeight:"700"}}>Login Form</p>
         <div class="m-2">
         <label class="label-form"><span style={{fontSize:"17px",fontWeight:"600",paddingLeft:"25px"}}>Name: </span></label>
         <input type="text" name="text" placeholder="Enter Your Name" style={{marginLeft:"10px", width:"245px", height:"37px",border:"1px solid #4444"}}  onChange={(event)=>{
            setName(event.target.value)
         }}/>
         </div>
         <div class="m-2">
         <label class="label-form"><span style={{fontSize:"17px",fontWeight:"600",paddingLeft:"30px"}}>Email: </span></label>
         <input type="email" name="email" placeholder="Enter Your Email" style={{marginLeft:"10px", width:"245px", height:"37px",border:"1px solid #4444"}} onChange={(event)=>{
           setEmail(event.target.value)
         }}/>
         </div>
         <div class="m-3">
         <label class="label-form"><span style={{fontSize:"17px",fontWeight:"600"}}> Password: </span></label>
         <input type="password" name="password" placeholder="Enter Your Password" style={{marginLeft:"10px", width:"245px", height:"37px",border:"1px solid #4444"}} onChange={(event)=>{
           setPassword(event.target.value)
         }}/>
         </div>
          <button clss="btn btn-primary " type="submit"><p style={{width:"180px", height:"10px",fontSize:"16px",fontWeight:"600", }}> Submit</p></button>
      </form>
       {
        state.length>0 ? <div class="m-5" >
           <p class="m-2 " style={{fontSize:"21px", fontWeight:"600"}}>Login InFo</p>
           <div style={{border:"1px solid #ddd"}}>
            {
                state.map((item, key) => <FormAdd name={item.name} email={item.email} password={item.password} key={key}/>)
            }
           </div>
        </div>:""
       }
    </div>
    </div>
  )
}

export default FormInfo