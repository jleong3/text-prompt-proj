import React from 'react'; 

const ResponseList = ({ responses }) => {
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
            </div>
        </div>
    );
}

export default ResponseList;
