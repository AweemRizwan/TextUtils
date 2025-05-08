import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupClick = ()=>{
    // console.log("Uppercase was Clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Conveted to Upper case", "Success");
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was Clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Conveted to Lower case", "Success");

  }
 
  const handleClearClick = ()=>{
    // console.log("Uppercase was Clicked: "+ text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Removed", "Danger");

  }

  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "Success");

  }
 
  const handleExtraSpaces = ()=>{

    let newText = text.split(/[ ]+/); 
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "Success");

  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // setText("New Text");//COrrect way to change the state
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">Example TextArea</textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick} >Convert To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read </p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    
  )
}
