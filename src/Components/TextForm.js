import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('')
  const handleUpClick=()=>{
    console.log("UpperCasewasclicked")
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    console.log("LowerCasewasclicked")
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleonchng = (event) => {
    console.log("upchangedwasclicked")
    setText(event.target.value)
  }

  const blueclick = () => {
    console.log("text changed to blue color")
    let newText="";
    setText(newText);
  }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchng} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={blueclick}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>{text.length===0?0:text.split(/\s+/).length} words and {text.length} characters</p>
          <h2>Preview</h2>
          <p>{text}</p>
    </div>
    </>

  )
}