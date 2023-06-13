import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
  // const host ="https://e-note-backend.onrender.com";
   const initialNotes= []
    
    const [notes,setNotes]=useState(initialNotes)

    //Get all notes
  const getNotes=async ()=>{
    //  TODO API call

    const response = await fetch("https://e-note-backend.onrender.com/api/notes/fetchallnotes", {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token'),
      },
      // body: JSON.stringify({title,description,tag}) 
    });
    const j = await response.json()
    console.log(j)
    setNotes(j)
   
  }


    // Add a note
  const addNote=async (title,description,tag)=>{
    //  TODO API call

    const response = await fetch("https://e-note-backend.onrender.com/api/notes/addnotes", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}) 
    });
    const j=await response.json();

    console.log(j)
    console.log("Adding a new note")
    // const note= {
    //   "user": "63c90340ec491ff3dd96ff13",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "_id": "63c9e88366f2f5c75ba50f75",
    //   "date": "2023-01-20T01:04:03.015Z",
    //   "__v": 0
    // };
    const note=j;
   setNotes(notes.concat(note));
  }

    // Delete a note
    const deleteNote=async(id)=>{
      // API call to delete a note
      const response = await fetch(`https://e-note-backend.onrender.com/api/notes/deletenotes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        }
      });
    console.log("Delete a note with id"+id)
    const j= response.json();

    console.log(j)
    // The filter method is used on the notes array to create a new array called newNote.
    // then it will delete the particular note
   const newNote=notes.filter((note)=>{return note._id!==id});
    setNotes(newNote)
  }

    // edit a note
    const editNote=async(id,title,description,tag)=>{
      // API call to edit a note
      const response = await fetch(`https://e-note-backend.onrender.com/api/notes/updatenotes/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}) 
      });
      const j= await response.json();

      console.log(j)

      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
       for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id ===id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
              break;
        }
       }
       setNotes(newNotes);
    }

    return(
        // <NoteContext.Provider value={{state:state,update:update}}>
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;