import React from 'react'; 

const CurrentResponse = ({ responses }) => {

    return (
        <div className="ui container">
            <div>
                <h1>Response</h1>
                <div className="ui segment">
                    <h1>TAG</h1>
                    <h2>ADVERTISING TEXT</h2>
                    <p>Product Description</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentResponse;
