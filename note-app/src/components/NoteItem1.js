import React,{useContext} from 'react'
import NoteContext from '../context/Notes/NoteContext'
// eslint-disable-next-line
import Notec from './Notec.css'
const NoteItem = (props) => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const context=useContext(NoteContext)
    const {deleteNote}=context;
   const {note,updateNote}=props;
  return (
    <div className='col md-3' >
      <div className="card my-3" style={{borderRadius:25}} >
  <div className="card-body">
    <h5 className="card-title"> {note.title}</h5>
    <p className="card-text">  {note.description} </p>
    <h5 className="card-text"> {note.tag}</h5>
    {/* <p className="card-text">{date}</p> */}
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id);} }></i>
    <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updateNote(note)}}></i>
    <p className="card-text">{date}</p>
  </div>
</div>
    </div>
  )
}

export default NoteItem