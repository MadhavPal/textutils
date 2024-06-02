import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was cllicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
        
    }
    const handleDownClick=()=>{
        // console.log("Uppercase was cllicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was cllicked" + text);
        let newText=('');
        setText(newText)
        props.showAlert("Clear text","success");
    }
    const handleCopyClick=()=>{
        // console.log("I am copy");//it shows only on console 
        var text=document.getElementById("myBox");
        text.select(); //if we are using this only, error come but the logic is working
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy Text","success");
    }
    const handleExtraSpaces=()=>{ //this is done by using RegExp JavaScript
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const[text, setText] = useState("");
    // text="New text";// Wrong way to update text 
    // setText("New text"); //correct way to update text
  return (
    <>
    < div className='container' style={{color:props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className= "mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#042743': 'white', color:props.mode==='dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container mx-10' style={{color:props.mode==='dark'? 'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
