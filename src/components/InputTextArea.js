import React, { useState } from 'react';
import { Button, Radio, Form } from 'semantic-ui-react';

const InputTextArea = ({ onAiReqSubmit }) => {
    const [textInput, setTextInput] = useState('');
    const [selectedTextType, setSelectedTextType] = useState('');
    const TAG = "Tag";
    const AD = "Advertisement Text";
    const DESC = "Product Description";

    const onInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();     // prevents page entirely refreshing 
        onAiReqSubmit(textInput, selectedTextType);
    };

    const handleRadioSelect = (e, { value }) => {
        setSelectedTextType(value);
    };

    return (
        <div className="ui segment">
            <Form onSubmit={onSubmit}v>
                {/* Text Input */}
                <Form.Field>
                    <label>What is your product?</label>
                    <input 
                        type="text" 
                        value={textInput} 
                        onChange={onInputChange}
                    />
                </Form.Field>
                {/* End Text Input */}
                {/* Radio Button Select */}
                <Form.Field>
                    Selected value: <b>{selectedTextType}</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label={TAG}
                        name='radioGroup'
                        value={TAG}
                        checked={selectedTextType === TAG}
                        onChange={handleRadioSelect}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label={AD}
                        name='radioGroup'
                        value={AD}
                        checked={selectedTextType === AD}
                        onChange={handleRadioSelect}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label={DESC}
                        name='radioGroup'
                        value={DESC}
                        checked={selectedTextType === DESC}
                        onChange={handleRadioSelect}
                    />
                </Form.Field>
                {/* End Radio Button Select */}
                <Button type='submit' className="basic circular blue fluid">
                    <Button.Content href="#">
                        Generate
                    </Button.Content>
                </Button>
                {/* <Button basic circular color='blue' content='Generate' type='submit' /> */}
            </Form>
            {/* <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>What is your product?</label>
                    <input 
                        type="text" 
                        value={textInput} 
                        onChange={onInputChange}
                    />
                </div>
                <button className="ui basic purple fluid button">
                    Enter
                </button>
            </form> */}
        </div>
    );
};

export default InputTextArea;
