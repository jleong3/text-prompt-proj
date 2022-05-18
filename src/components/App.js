import React, { useState } from 'react'; 
import TextArea from './TextArea';
import ResponseList from './ResponseList';


const App = () => {
    const { Configuration, OpenAIApi } = require("openai");
    const [responses, setResponses] = useState([]);
    // const [inquiryHistory, setInquiryHistory] = useState([{}]);

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
        // const response = "\n1. Pastel colors\n2. Bright colors\n3. neutrals";
        // const response = "this is a string.";
        // const response = "\nA wedding can be any color scheme you want as long as it works with your wedding theme. Here are three color schemes for weddings:\n\n1. A neutral color scheme with pops of color.\n\n2. A pastel color scheme with a touch of color.\n\n3. A colorful, fun color scheme.";
        // const response = "\n1. A light and airy color scheme that incorporates whites, light blues, and light purples.\n2. A romantic and bright color scheme with pink, peach, and light coral.\n3. A classic and sophisticated color scheme with black, navy, and light gray.";
        setResponses(response);
        // setInquiryHistory([{prompt: textInput, response: response}, ...inquiryHistory])
    };
    
    console.log("DATAA: ", responses);

    return (
        <div className="ui centered aligned container">
            <h1>Welcome!</h1>
            <div className="ui container">
                <TextArea onAiReqSubmit={onTextSubmit} />
                <ResponseList 
                    responses={responses} 
                    // inquiryHistory={inquiryHistory}
                />
            </div>
        </div>
    );

};

export default App; 
