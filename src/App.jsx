import {React, useState} from 'react'
import Leftside from './components/left-area'
import Rightside from './components/right-area'


const App = () => {
  const [Task, setTask] = useState([])
  return (
    <div className='flex '>
      <Leftside Task={Task} setTask={setTask} />
      <Rightside Task={Task} setTask={setTask} />
    </div>
  )
}

export default App