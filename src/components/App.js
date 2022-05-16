import React, { useState } from 'react'; 
import SearchBar from './SearchBar';
import ResponseList from './ResponseList';

const App = () => {
    const [responses, setResponses] = useState([]);

    const onTextSubmit = (textInput) => {
        console.log("Text Submitted: ", textInput);
        // api req here 
        const response = {
            data: {
                items: [
                    {
                        first: "first 1",
                        last: "last 1",
                        id: 1, 
                    },
                    {
                        first: "first 2",
                        last: "last 2",
                        id: 2, 
                    },
                    {
                        first: "first 3",
                        last: "last 3",
                        id: 3, 
                    }
                ]
            }
        }

        console.log("DATAA: ", response.data.items);
        setResponses(response.data.items)
    };

    return (
        <div className="ui container">
            <SearchBar onAiReqSubmit={onTextSubmit} />
            <ResponseList responses={responses} />
            <p>I have {responses.length} responses.</p>
        </div>
    );

};

export default App; 
