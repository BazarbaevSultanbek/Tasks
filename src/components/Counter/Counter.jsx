import { useState } from 'react'
import './Counter.scss'

const Counter = () => {

    const [number, setNumber] = useState(0)

    const Increment = () => {
        setNumber(prevState => prevState + 1)
    }

    const Decrement = () => {
        setNumber(prevState => prevState - 1)
    }
    return (
        <div className='Counter'>
            <div className="container">
                <div className="Counter-logo">
                    <h3>Counter-logo</h3>
                </div>
                <div className="Counter-block">
                    <div className="Counter-block-inc">
                        <button onClick={() => Increment()} type="button" class="btn btn-primary">Increment</button>
                    </div>
                    <div className="Counter-block-number">
                        <p>Number: {number}</p>
                    </div>
                    <div className="Counter-block-dec">
                        <button onClick={() => Decrement()} type="button" class="btn btn-danger">Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;