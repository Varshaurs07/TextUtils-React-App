import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText1 = text.toLowerCase();
        setText(newText1)
    }
    const handleClearClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText2 = '';
        setText(newText2)
    }
    const handlereverseClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText3='';
        for(let i=text.length-1;i>=0;i--){
            newText3 += text[i];
        }
        setText(newText3)
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert('copied to clipboard');
    }
    const handleExtraSpaces = () => {
        let newText4 = text.split(/[ ]+/).join(" ");
        setText(newText4);
    }
    const handleCapitalize = () => {
        let newText = text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        setText(newText);
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    };
    const handleonChange = (event) => {
        //console.log("On change");
        setText(event.target.value) 
    }
    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new Text"); //correct way to chnage the text
  return (
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlereverseClick}>Reverse the text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize Words</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeak}>Speak Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
  )
}
