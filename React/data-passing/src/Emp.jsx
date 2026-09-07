import React, { useState } from 'react'

function Emp() {


    const employee = [

        { empName: "Luke", empDesg: "Developer", empSal: 50000, empExp: 5 },
        { empName: "Vyom", empDesg: "Tester", empSal: 40000, empExp: 4 },
        { empName: "Lisa", empDesg: "HR", empSal: 40000, empExp: 3 },
        { empName: "Jhon", empDesg: "TL", empSal: 60000, empExp: 5 },
        { empName: "Arun", empDesg: "Developer", empSal: 50000, empExp: 5 },]

    const [name,setName] = useState("");    
    return (
        <>
         <input type='text' placeholder='enter ur Username' onChange={e=>setName(e.target.value)} />
        <h1>{name}</h1>
        
        </>
    )
}

export default Emp