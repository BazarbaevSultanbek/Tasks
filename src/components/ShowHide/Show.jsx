import { useState } from 'react'
import './Show.scss'

const Show = () => {

    const [status, setStatus] = useState(false)
    return (
        <div className='Show'>
            <div className="container">
                <div className="Show-block">
                    <div className='Show-block-text'>
                        <p style={{ display: status ? "block" : "none" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                            Laudantium, maiores omnis neque beatae id quisquam, quo<br />
                            officiis eius dicta in sunt quae esse optio sed facere,<br />
                            natus dolorem et qui?</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => setStatus(!status)}>{!status ? "Show" : 'Hide'}</button>
                </div>
            </div>
        </div>
    )
}

export default Show;