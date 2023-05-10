import React, {useState} from 'react'
import copy from "copy-to-clipboard";
export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the Text","success");

    }
    const handleCopyText = ()=>{ 
        copy(text);
        props.showAlert("Copied the Text","success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces in the Text","success");

    }
    const[text, setText] = useState('');
    // text = 'jhbcbcd';// this can,t be done
    // setText("kjbdw");
     return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'042743'}}>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
            <div className="mb-3">
                {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}   >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


       </div>
       <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p> {text.split(" ").length } Words, {text.length} Characters</p>
            <p> Read time : { 0.08 * text.split(" ").length} min </p>
            <h2>Preview</h2> 
            <p>{text.length >0 ? text: "Enter Something to Preview"}</p>
       </div>
       </>
    )
}
