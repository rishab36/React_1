import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import DigitalClock from './digitalClock'

function App() {

  return (
    <div className='app-container'>
    <ToDoList />
    <DigitalClock />
    </div>
  )
}

export default App
