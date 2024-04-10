import { useState } from 'react';
import './Welcome.scss'

const Welcome = () => {
    const [name, setName] = useState('')   

    return (
        <div className='Welcome'>
            <div className="container">
                <div className="Welcome-logo">
                    <h3>Welcome</h3>
                </div>
                <div className="Welcome-block">
                <input type="text" onChange={(e) => setName(e.target.value)} />                
                <p style={{ display: name === "" ? "none" : "block" }}>Hello, {name}!</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
