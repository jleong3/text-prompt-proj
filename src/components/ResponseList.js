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
                <h1>History</h1>
                
                <div>
                    {inquiryHistory.map( ({ prompt, response }) => (
                        <div key={prompt} className="">
                            <div className="ui grid">
                                <div className="row"> 
                                    <div className="four wide column">
                                        <h3>Prompt: </h3>
                                    </div>
                                    <div className="twelve wide column">
                                        <p>{prompt}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row"> 
                                    <div className="four wide column">
                                        <h3>Response: </h3>
                                    </div>
                                    <div className="twelve wide column">
                                        <p>{newLineTxt(responses)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
}

export default ResponseList;
