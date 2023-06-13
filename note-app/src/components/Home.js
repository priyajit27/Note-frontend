import React from 'react'
import Notes from './Notes'
// import NoteContext from '../context/Notes/NoteContext'
// eslint-disable-next-line
import Notec from './Notec.css'

const Home = (props) => {
  // const context=useContext(NoteContext)
  // const {notes,setNotes}=context
  const {showAlert}=props
  return (
    <div>
       <Notes showAlert={showAlert}  />
       {/* <footer>
          <img src="https://res.cloudinary.com/djkn56f5y/image/upload/v1686332547/taking-notes-1_nhk5h0.jpg" alt="Footer"/>
        </footer> */}
       </div>
  )
}

export default Home