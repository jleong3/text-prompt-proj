import React, { useState } from 'react'; 
import { Grid } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react';
import CurrentResponse from './CurrentResponse';
import InputTextArea from './InputTextArea';
import ResponseList from './ResponseList';

const App = () => {
    // Commenting out API call to prevent too many requests. Using mock data instead. 

    const { Configuration, OpenAIApi } = require("openai");
    const [responses, setResponses] = useState([]);
    const [inquiryHistory, setInquiryHistory] = useState([]);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    }); 
    const openai = new OpenAIApi(configuration);

    const getPromptString = (textInput, selectedTextType) => {
        console.log("getPromptString Text Submitted: ", textInput, selectedTextType);

        switch(selectedTextType) {
            case "Tag":
                return `Generate a tagline for ${textInput}`;
            case "Advertisement Text": 
                return `Create an advertisement for buying ${textInput}`;
            case 'Product Description':
                return `Create a product description for ${textInput}`;
            default:
                return `Give me a fun fact about ${textInput}`;
        }
    };

    const onTextSubmit = async (textInput, selectedTextType) => {
        console.log("onTextSubmit Text Submitted: ", textInput, selectedTextType);
        const promptString = getPromptString(textInput, selectedTextType);
        const apiResponse = await openai.createCompletion("text-curie-001", {
            prompt: promptString,
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
        // const response = promptString;
        // const response = "\n1. A light and airy color scheme that incorporates whites, light blues, and light purples.\n2. A romantic and bright color scheme with pink, peach, and light coral.\n3. A classic and sophisticated color scheme with black, navy, and light gray.";
        setResponses(response);
        // setTextType(selectedTextType);
        setInquiryHistory([{prompt: promptString, response: response, key: inquiryHistory.length+1}, ...inquiryHistory])

    };
    
    // console.log("DATAA: ", textType);
    console.log("INQ HIST: ", inquiryHistory);

    return (
        <>
            <Segment padded color="purple">TextGenerator</Segment>
            <div className="ui container"> 
                <h1>Create amazing marketing text with our text generator!</h1> {/* center this */}
                <div className="ui placeholder segment">
                    <Grid columns='one' divided>
                        <Grid.Row>
                            <Grid.Column>
                                <div className="ui form">
                                    <InputTextArea onAiReqSubmit={onTextSubmit} />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <CurrentResponse responses={responses} />
                                <ResponseList responses={responses} inquiryHistory={inquiryHistory} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>

            </div>
        </>
    );

};

export default App; 
