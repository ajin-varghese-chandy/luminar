import React, { use } from 'react'

function User(props) {
    const user = props.user;

    return (
        <div>
            <h1>Username : {user[0]}</h1>
            <h1>Email : {user[1]}</h1>
            <h1> Age : {user[2]}</h1>
            <h1>pHONE NUMBER : {user[3]}</h1>

        </div>
    )
}

export default User