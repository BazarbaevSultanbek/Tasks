import { useState } from 'react';
import './Todo.scss'
function Todo() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')
    const addTask = () => {
        setTasks([
            ...tasks,
            {
                task: text,
                id: Math.floor(Math.random() * 1000000)
            }
        ])

        setText('')
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id))
    }

    return (
        <div className="Todo">
            <div className="container">
                <div className="Todo-block">
                    <div className="Todo-block-navi">
                        <input type="text" className="form-control" onChange={(e) => setText(e.target.value)} value={text} placeholder="Write text..."/>
                        <button className="btn btn-primary" onClick={() => addTask()}>Add Task</button>
                    </div>

                    <div className="Todo-block-list">
                        <ul className="list-group">
                            {
                                tasks.map((item) => {
                                    return (
                                        <li id={item.id} key={item.id}>
                                            {item.task}
                                            <button onClick={() => removeTask(item.id)}>X</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Todo;