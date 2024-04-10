import './Even.scss'

const EvenOdd = ({ number }) => {
    return (
        <div className='Even'>
            <div className="container">
                <div className="Even-block">
                <h2>Number: {number}</h2>
                {number % 2 === 0 ? (
                    <p>The number is even.</p>
                ) : (
                    <p>The number is odd.</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default EvenOdd;
