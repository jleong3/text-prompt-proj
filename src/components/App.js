import React, { useEffect, useState } from 'react'; 
import SearchBar from './SearchBar';
import ResponseList from './ResponseList';


const App = () => {
    const { Configuration, OpenAIApi } = require("openai");
    const [responses, setResponses] = useState([]);

    const configuration = new Configuration({
        apiKey: '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',
    }); 
    const openai = new OpenAIApi(configuration);

    const onTextSubmit = async (textInput) => {
        console.log("Text Submitted: ", textInput);
        const response = await openai.createCompletion("text-curie-001", {
            prompt: textInput,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        setResponses(response.data.choices[0].text);
    };
    
    
    console.log("DATAA: ", responses);

    return (
        <div className="ui container">
            <SearchBar onAiReqSubmit={onTextSubmit} />
            <ResponseList responses={responses} />
        </div>
    );

};

export default App; 
