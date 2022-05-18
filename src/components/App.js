import React, { useState } from 'react'; 
import TextArea from './TextArea';
import ResponseList from './ResponseList';


const App = () => {
    const { Configuration, OpenAIApi } = require("openai");
    const [responses, setResponses] = useState([]);
    const [inquiryHistory, setInquiryHistory] = useState([{}]);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    }); 
    const openai = new OpenAIApi(configuration);

    const onTextSubmit = async (textInput) => {
        console.log("Text Submitted: ", textInput);
        const apiResponse = await openai.createCompletion("text-curie-001", {
            prompt: textInput,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        const response = apiResponse.data.choices[0].text;
        setResponses(response);
        setInquiryHistory([{prompt: textInput, response: response}, ...inquiryHistory])
    };
    
    console.log("DATAA: ", responses);
    console.log("INQ HIST: ", inquiryHistory);

    return (
        <div className="ui centered aligned container">
            <h1>Welcome!</h1>
            <div className="ui container">
                <TextArea onAiReqSubmit={onTextSubmit} />
                <ResponseList 
                    responses={responses} 
                    inquiryHistory={inquiryHistory}
                />
            </div>
        </div>
    );

};

export default App; 
