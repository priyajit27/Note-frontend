import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit=async(e)=>{
         e.preventDefault();
         const response = await fetch("https://e-note-backend.onrender.com/api/auth/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}) 
            // By using JSON.stringify, the email and password values are converted into a JSON string in the format 
        });
        const j=await response.json();

        console.log(j)
        if(j.success){
            // redirect
            localStorage.setItem('token', j.authtoken); 
             props.showAlert("Logged in successfully","success",)
             navigate("/");
        }
        else{
            // alert("Invalid credentials")
            props.showAlert("Invalid details","danger",)
        }
    }
    
    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
      }
  return (
    <div className='my-3' style={{ color: props.mode === 'light' ? 'grey' : 'white',marginTop:100}} >
      <div style={{marginTop:80}}> 
    </div>
      <h2 className='my-2' >Login to continue to iNotebook</h2>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} name="email" aria-describedby="emailHelp" onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
<div style={{marginBottom:190}}> 
    </div>
    </div>
  )
}

export default Login