import React from 'react'

export default function Alert(props){
    const capitalise=(word)=>{
      if(word==='danger'){
        word='error'
      }
        const lower = word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    // if props.alert null then 2nd part wont be evaluated else 2nd part will be evaluated
    <div style={{height:'50 px'}}>
     { props.alert  &&  <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}