import { useState } from 'react'
import './App.css'
import User from './User'
import Emp from './Emp'

function App() {
  const [name, setName] = useState("Ajin")

  const [email, setEmail] = useState("ajin@gamil.com")

  const [age, setAge] = useState(21)

  const [phn, setPhn] = useState(4234234432)

  return (
    <>
<h1>User Component</h1>
<User user={[name , email , age ,phn]}/>
<h1>Employee Component</h1>
<Emp/>
    </>
  )
}

export default App
