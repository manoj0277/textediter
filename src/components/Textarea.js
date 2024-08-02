import React, { useState } from 'react'

export default function Textarea(props) {


    const handleUpClick = () => {
        // console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text copied!", "success");

    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h2>{props.heading} </h2>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className = 'btn btn-primary mx-1 my-1' onClick = { handleCopy } > Copy</button>

                </div >
    <div className='container my-3'>
        <h2> Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h3>Preview </h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
            </div >
        </>
    )
}
