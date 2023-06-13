import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",password1:""}) 
    let navigate = useNavigate();

    const handleSubmit=async(e)=>{
         e.preventDefault();
         const {name,email,password}=credentials
         const response = await fetch("https://e-note-backend.onrender.com/api/auth/createUser", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password}) 
        });
        const j=await response.json();

        console.log(j)
        if(j.success){
            // redirect
            localStorage.setItem('token', j.authtoken); 
             navigate("/");
             props.showAlert("Account created successfully","success",)
        }
        else{
            // alert("Invalid credentials")
            props.showAlert("Invalid credentials","danger",)
        }
    }
    
    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
      }
  return (
    <div className='my-3' style={{ color: props.mode === 'light' ? 'grey' : 'white'}}>
       <div style={{marginTop:80}}> 
    </div>
       <h2 className='my-2'>Create an account to use iNotebook</h2>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"  name="email"  aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  name="password"  id="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="password1" id="password1" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div style={{marginBottom:80}}> 
    </div>
    </div>
  )
}

export default Signup