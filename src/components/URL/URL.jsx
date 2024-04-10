import './URL.scss'

const URL = (props) => {
    return (
        <div className='Link'>
            <div className="container">
                <div className="Link-logo">
                    <h3>Product Card</h3>
                </div>
                <div className="Link-block">
                    <p>Product Name: {props.name}</p>
                    <p>Product Price: {props.price}$</p>
                    <span>Product:<img src={props.url} alt="cola" /> </span>
                </div>
            </div>
        </div>
    )
}

export default URL;