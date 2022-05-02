import React from 'react'
import { Routes, Route } from 'react-router-dom';
import layout from './components/Layouts';
import Form from './components/Form';
import Quiz from './components/Quiz';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<layout />}>
          <Route index element={<Form />} />
          <Route path='quiz' element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
