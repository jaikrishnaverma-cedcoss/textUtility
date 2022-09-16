import React from 'react';
import { useState } from 'react';
function Textarea() {
    const [text,setText]=useState("");
    const changeCase=(action)=>{
     return (action)?setText(text.toUpperCase()):setText(text.toLowerCase())
    }
   
    return ( 
        <>
        <div className="container">
     <div className="col" style={{textAlign:"left"}}>
        <h3 className='p1'>Text Area</h3>
        <textarea className='p1' style={{fontSize:"20px"}} name="" id="" cols="10" rows="6" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <div className="row"><button className="btn btn-info" onClick={()=>changeCase(true)}>Upper Case</button><button onClick={()=>changeCase(false)} className="btn btn-info">Lower Case</button></div>
        <h2 className='p1'>Summary</h2>
        <p className='p1'>{text.split(" ").length} words and {text.split("").length} characters</p>
     </div>
     </div>
        </>
     );
}

export default Textarea;