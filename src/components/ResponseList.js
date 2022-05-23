import React from 'react'; 
import '../css/CustomStyles.css';

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
                {inquiryHistory.length > 1 ? 
                <div>
                    {inquiryHistory.map( ({ prompt, response, key }) => (
                        <div key={key} className="">
                            <div className="ui grid">
                                <div className="row"> 
                                    <div className="four wide column">
                                    </div>
                                    <div id="center-text" className="eight wide column">
                                        <h3>Prompt: </h3>
                                        <p>{prompt}</p>
                                    </div>
                                    <div className="four wide column">
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="row"> 
                                    <div className="four wide column"></div>
                                    <div id="center-text" className="eight wide column">
                                        <h3>Response: </h3>
                                        <p>{newLineTxt(response)}</p>
                                    </div>
                                    <div className="four wide column"></div>
                                </div>
                            </div>
                            <div className="ui divider"></div>
                        </div>
                    ) ) }
                </div> : <div id="center-text"><p>"None to display yet!"</p></div>}
            </div>
        </div>
    );
}

export default ResponseList;
