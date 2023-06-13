import React,{useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  let navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('token')
      navigate("/login")
  }

  const location = useLocation();
  useEffect(() => {
   console.log(location.pathname)
  }, [location]);

  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-NOTEBOOK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==='/about'?"active" :""}`} aria-current="page" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active" :""}`} aria-current="page" to="/">ADD NOTES   </Link>
        </li>
       
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname==='/notes'?"active" :""}`} aria-current="page" to="/notes">YOUR NOTES</Link>
        </li>
      </ul>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mybtn}</label>
  </div>

     {!localStorage.getItem('token') ?<form className="d-flex">
      <Link className="btn btn-primary mx-1" to='/login' role="button">Login</Link>
      <Link className="btn btn-primary mx-1"  to='/signup' role="button">Signup</Link>
      </form>:  <button onClick={handleLogout} className="btn btn-primary mx-2">Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar