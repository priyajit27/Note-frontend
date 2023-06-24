import React from 'react'
// import { useEffect ,useContext} from 'react'
// import NoteContext from '../context/Notes/NoteContext'
// import Add from './Add.css'
// eslint-disable-next-line 
const About = (props) => {
    // const a =useContext(NoteContext)
    // useEffect(() => {
    //  a.update()
    // // eslint-disable-next-line
    // }, [])
    
  return (
    <div  >
    <h1 className='head' style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>ABOUT US</h1>
       {/* <div style={{marginTop:50}}> */}
        <div className='images'>
       <img className="image" src=" https://res.cloudinary.com/priyojit/image/upload/v1686298796/note_tlnha9.jpg"  alt="/About" />
       </div>
       {/* </div> */}
        <div style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>
        Welcome to e-Notebook!
At e-Notebook, we provide a digital platform for organizing and managing your notes effectively. Whether you're a student, professional, or simply someone who wants to stay organized, our e-notebook solution has got you covered.
<br></br>
<br></br>
The "Virtual Notebook application using MERN stack" is a full-stack web application that allows users to create, read, update, and delete notes. This app has been developed using the MERN stack, which is a combination of four powerful technologies: MongoDB, Express.js, React, and Node.js
<br></br>
<br></br>
Key Features:
<br></br>
Create and Customize Notebooks: Create multiple notebooks based on your subjects, projects, or any other categories that suit your needs. 
<br></br>
Organize Notes: Within each notebook, create individual notes for different topics with title,description and tag if required.
<br></br>
Privacy and Security: We prioritize the security of your data. Your notes and personal information are encrypted and stored securely. You have full control over the privacy settings of your notebooks and can choose who can access them.
One of the essential features of this Notes App is that it uses password hashing techniques to ensure that users' login credentials are secure. Additionally, the app uses token login to provide a more secure authentication process. This makes the app more secure and ensures that users' information is protected from hackers and other malicious activities.
<br></br>
Start your digital note-taking journey with e-Notebook today and experience a smarter and more efficient way of managing your notes. Stay organized, boost productivity, and never miss a crucial detail again!
<br></br>
<br></br>
Sign up now for using our application.

        </div>
    </div>
  
  )
}

export default About