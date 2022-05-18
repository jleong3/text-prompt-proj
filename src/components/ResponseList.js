import React from 'react'; 

const ResponseList = ({ responses, inquiryHistory }) => {
    const newLineTxt = (stringText) => {
        if (stringText.includes("\n")) {
            return stringText.split(/\r?\n/).map(str => <p>{str}</p>);
        }
        return stringText;
    }

    return (
        <div className="ui container">
            <p>I have {responses.length} responses.</p>
            <div className="ui segment">
                <h1>Responses</h1>
                {newLineTxt(responses)}
                {/* <div>
                    {inquiryHistory.map( ({ prompt, response }) => (
                        <p key={prompt}>Prompt: {prompt} <br/> Response: {response}</p>
                    ) )}
                </div> */}
            </div>
        </div>
    );
}

export default ResponseList;
