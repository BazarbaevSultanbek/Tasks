import './Button.scss'


const Button = (props) => {
    return (
        <div className='Button'>
            <div className="container">
                <div className="Button-logo">
                    <h3>Button Task</h3>
                </div>
                <div className="Button-block">
                <button type="button" class="btn btn-primary">{props.text}</button>
                </div>
            </div>
        </div>
    )
}

export default Button;