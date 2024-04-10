import { useState } from 'react'
import Welcome from './components/Welcome/Welcome.jsx'
import Button from './components/Button/Button.jsx'
import List from './components/List/List.jsx'
import URL from './components/URL/URL.jsx'
import Counter from './components/Counter/Counter.jsx'
import Form from './components/Form/Form.jsx'
import Toggle from './components/Toggle/Toggle.jsx'
import Todo from './components/Todo/Todo.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer/Timer.jsx'
import Show from './components/ShowHide/Show.jsx'
import EvenOdd from './components/Even/Even.jsx'
import Login from './components/Login/Login.jsx'
import Hover from './components/Hover/Hover.jsx'

function App() {

  const [page, setPage] = useState('Welcome');

  const items = [
    'John',
    'Snow',
    'Daenerys Targaryen',
    'Khaleesi',
    'Tyrion Lannister',
  ]


  const name = "Cola"

  const price = 23.5

  const Url = 'https://www.bakenroll.az/en/image/coca-cola.jpg'


  const ModifyPage = () => {
    switch (page) {
      case 'Welcome':
        return <Welcome />
      case 'Button':
        return <Button text="Submit" />
      case 'List':
        return <List items={items} />
      case 'URL':
        return <URL name={name} price={price} url={Url} />
      case 'Counter':
        return <Counter />
      case 'Form':
        return <Form />
      case 'Toggle':
        return <Toggle />
      case 'Todo':
        return <Todo />
      case 'Timer':
        return <Timer />
      case 'Show':
        return <Show />
      case 'Even':
        return <EvenOdd number={7} />
      case 'Login':
        return <Login isLoggedIn={"admin"} />
        case 'Hover':
        return <Hover />
    }
  }



  return (
    <div className='App'>
      <div className="container">
        <div className="App-block">
          <div className="App-block-inner">
            <h3>Tasks</h3>
            <div className="App-block-inner-menu">
              <ul className='App-block-menu-list'>
                <li onClick={() => setPage('Welcome')}>Welcome</li>
                <li onClick={() => setPage('Button')}>Button</li>
                <li onClick={() => setPage('List')}>List</li>
                <li onClick={() => setPage('URL')}>URL</li>
                <li onClick={() => setPage('Counter')}>Counter</li>
                <li onClick={() => setPage('Form')}>Form</li>
                <li onClick={() => setPage('Toggle')}>Toggle</li>
                <li onClick={() => setPage('Todo')}>Todo</li>
                <li onClick={() => setPage('Timer')}>Timer</li>
                <li onClick={() => setPage('Show')}>Show/Hide</li>
                <li onClick={() => setPage('Even')}>Even/Odd</li>
                <li onClick={() => setPage('Login')}>Login</li>
                <li onClick={() => setPage('Hover')}>Hover</li>
              </ul>
              <div className="App-block-page">{ModifyPage()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
