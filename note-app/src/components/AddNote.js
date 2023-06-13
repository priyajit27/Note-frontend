import React,{useContext}from 'react'
import NoteContext from '../context/Notes/NoteContext'
// eslint-disable-next-line
import Notec from './Notec.css'
import { useState } from 'react'
const AddNote = (props) => {
    const context=useContext(NoteContext)
    const {addNote}=context;
    // The object destructuring syntax { addNote } is used to extract the addNote function from the context object. This allows you to directly use the addNote function within the component.
     const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick = (e) => {
        e.preventDefault()
      addNote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""})
      props.showAlert("Added successfully","success",)
    }

    const onChange = (e) => {
      setNote({...note,[e.target.name]:e.target.value});
    }
  return (
    <div style={{ color: props.mode === 'light' ? '#909495' : '#909495' }} >
         <div className='container my-3'  >
         <div style={{marginTop:150}}>
       <h1 style={{textAlign:'center',textDecoration:'underline'}}>ADD YOUR NOTES</h1>
       </div>
       <form className='container my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">TITLE</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}  minLength={2} required value={note.title}/>
  </div>

  <div className="mb-3">
    <label htmlFor="description" className="form-label" >DESCRIPTION</label>
    <input type="text" className="form-control" id="description" name="description"  onChange={onChange}  minLength={5} required value={note.description} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" >TAG</label>
    <input type="text" className="form-control" id="tag" name="tag"  onChange={onChange} value={note.tag}/>
  </div>

  <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
</form>
</div>
  
    </div>
  )
}

export default AddNote