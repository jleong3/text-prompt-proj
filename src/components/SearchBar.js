import React, { useState } from 'react'; 

const SearchBar = ({ onAiReqSubmit }) => {
    const [textInput, setTextInput] = useState('');

    const onInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();     // prevents page entirely refreshing 
        onAiReqSubmit(textInput);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Enter Prompt</label>
                    <input 
                        type="text" 
                        value={textInput} 
                        onChange={onInputChange}
                    />
                </div>
                <button class="ui primary button">
                    Enter
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
