import { useState } from "react";



const User = ({name}) => {

    const [count] = useState(0);



    return (
        <div className='user-card'>
            <h1>count : {count}</h1>
            <h2>Name : {name}</h2>
            <h3> Location : Botad</h3>
            <h4>Contack : +91-8153933938</h4>
        </div>
    )
}

export default User;