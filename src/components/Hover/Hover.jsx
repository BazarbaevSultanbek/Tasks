import { useState } from 'react';
import './Hover.scss'


const Hover = () => {


    const [status, setStatus] = useState(false)

    return (
        <div className='Hover'>
            <div className="container">
                <div className="Hover-block">
                    <p style={{ opacity: status ? "1" : "0" }} onMouseEnter={() => setStatus(true)} onMouseLeave={() => setStatus(false)}>Hover over a component</p>
                </div>
            </div>
        </div>
    )
}

export default Hover;