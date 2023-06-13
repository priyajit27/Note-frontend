import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect,useRef,useState } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import NoteItem1 from './NoteItem1'
// eslint-disable-next-line
import Notec from './Notec.css'
// import Alert from './Alert';

const Notes = (props) => {
    const context=useContext(NoteContext)
    const {notes,getNotes,editNote}=context
    let navigate = useNavigate();
   
    const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: ""})
    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes()
      }
      else{
        navigate("/login");
      }
       // eslint-disable-next-line
    }, [])
    
    const ref=useRef(null)
    const refClose=useRef(null)

    const updateNote = (currentNote) =>{
      ref.current.click();
      setNote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
      
    }
    const handleClick = (e) => {
      console.log("Updating the note...", note)
      e.preventDefault()
      editNote(note.id,note.etitle,note.edescription,note.etag)
      ref.current.click();
    //   props.showAlert("Updated successfully","success",)
  }

  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <div >
      {/* <AddNote showAlert={props.showAlert}/> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">


      {/* <form className="my-form">
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" id="etitle" name="etitle"  aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={3}  required />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea   id="edescription" name="edescription"  onChange={onChange}  value={note.edescription}  minLength={5}  required></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text"  id="etag" name="etag"  onChange={onChange}  value={note.etag}/>
  </div>
  <button type="submit">Submit</button>
</form>  */}
      <form className='container my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={3} required/>
  </div>

  <div className="mb-3">
    <label htmlFor="description" className="form-label" >Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription"  onChange={onChange}  value={note.edescription}  minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" >Tag</label>
    <input type="text" className="form-control" id="etag" name="etag"  onChange={onChange}  value={note.etag}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<3 || note.edescription.length<5} onClick={handleClick}  type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
        <div className="container row my-3" >
       <h1 className='head' style={{ color: props.mode === 'light' ? 'grey' : 'white',marginTop:25 }}>Your notes</h1>
       <div className="container mx-2"  style={{paddingTop:50}}>
      <h2 style={{ color: props.mode === 'light' ? 'grey' : 'white',textAlign:'center'}}>{notes.length===0 && "No notes to display"}</h2>
       {/* {notes.length===0 && "No notes to display"} */}
       </div >
     
       {notes.map((note) =>{
       return <NoteItem1 key={note._id} updateNote={updateNote} note={note} />
})}
<div style={{paddingTop:270}}> </div>
       </div>
    </div>
  )
}

export default Notes