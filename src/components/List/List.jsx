import './List.scss'

const List = (props) => {
    return (
        <div className='List'>
            <div className="container">
                <div className="List-logo">
                    <h3>List</h3>
                </div>
                <div className="List-block">
                    <ul>
                        {
                            props.items.map((text) => (
                                <li key={text}>{text}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List;