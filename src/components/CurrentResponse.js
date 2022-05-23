import React from 'react'; 
import '../css/CustomStyles.css'

const CurrentResponse = ({ responses }) => {

    return (
        <div className="ui container">
            <div id="center-text">
                <h1>Results</h1>
                <div className="ui segment">
                    {responses.length > 1 ? 
                        <div>
                            <p id="current-response">{responses}</p>
                        </div> 
                        : <p>Enter your product above to view a generated marketing text!</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default CurrentResponse;
