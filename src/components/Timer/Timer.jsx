import React, { useState, useEffect } from 'react';

import './Timer.scss'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const Start = () => {
        setIsRunning(true);
    };

    const Pause = () => {
        setIsRunning(false);
    };

    const Reset = () => {
        setIsRunning(false);
        setTime(0);
    };



    useEffect(() => {
        let timerId;

        if (isRunning) {
            timerId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);

    return (
        <div className='Timer'>
            <div className="container">
                <div className="Timer-block">
                    <h1>Timer: {formatTime(time)}</h1>
                    <div>
                        <button className="btn btn-primary" onClick={Start}>Start</button>
                        <button className="btn btn-warning" onClick={Pause}>Pause</button>
                        <button className="btn btn-danger" onClick={Reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
