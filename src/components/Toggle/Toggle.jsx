import { useState } from 'react'
import './Toggle.scss'

const Toggle = () => {

    const [status, setStatus] = useState(false)
    return (
        <div className='Toggle'>
            <div className="container">
                <div className="Toggle-block">
                    <button className={status ? 'btn btn-light' : "btn btn-dark"} onClick={() => setStatus(!status)}>Toggle:{status ? "on" : "off"}</button>
                </div>
            </div>
        </div >
    )
}

export default Toggle;