import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
    const [text, setText] = useState('');

    const GetText = (e) => {
        setText(e.target.value);
    };

    const SubmitEvent = (e) => {
        e.preventDefault();
        alert(text);
        setText('');
    };

    return (
        <div className='Form'>
            <div className="container">
                <form className="Form-block" onSubmit={SubmitEvent}>
                    <div className="Form-block-field">
                        <input type="text" placeholder='Write text...' className="form-control" value={text} onChange={GetText} />
                    </div>
                    <div className="Form-block-submit">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
