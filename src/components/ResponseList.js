import React from 'react'; 

const ResponseList = ({ responses, inquiryHistory }) => {
    const newLineTxt = (stringText) => {
        if (stringText.includes("\n")) {
            return stringText.split(/\r?\n/).map(str => <p>{str}</p>);
        }
        return stringText;
    }

    return (
        <div className="ui container" id="past-inquiries">
            <h2 id="center-text">Past Inquiries</h2>
            <div className="ui segment">
                <h1>Responses</h1>
                {newLineTxt(responses)}
                <div>
                    {inquiryHistory.map( ({ prompt, response }) => (
                        <p key={prompt}>Prompt: {prompt} <br/> Response: {response}</p>
                    ) )}
                </div>
            </div>
        </div>
    );
}

export default ResponseList;
