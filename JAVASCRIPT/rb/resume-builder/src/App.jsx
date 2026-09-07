
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './Components/Header'
import Home from './Pages/Home'
import ResumeSteps from './Pages/ResumeSteps'
import UserForm from './Pages/UserForm'
import Downloads from './Pages/Downloads'
import ViewResume from './Pages/ViewResume'
import Pnf from './Pages/Pnf'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='steps' element={<ResumeSteps/>}></Route>
      <Route path='form' element={<UserForm/>}></Route>
      <Route path='downloads' element={<Downloads/>}></Route>
      <Route path='resume/:id/view' element={<ViewResume/>}></Route>

      <Route path='/*' element={<Pnf/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
