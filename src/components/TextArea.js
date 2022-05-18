import React, { useState } from 'react'; 

const TextArea = ({ onAiReqSubmit }) => {
    const [textInput, setTextInput] = useState('');

    const onInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();     // prevents page entirely refreshing 
        onAiReqSubmit(textInput);
    };

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Enter Prompt</label>
                    <input 
                        type="text" 
                        value={textInput} 
                        onChange={onInputChange}
                    />
                </div>
                <button className="ui primary button">
                    Enter
                </button>
            </form>
        </div>
    );
};

export default TextArea;
