import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Test = () => {
    const [users , setUsers]=useState()

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .this(res=>setUsers(res.data))
})
    return (
        <div>
            {users.map((ta,index)=>{
                <div>
                    <h1>{ta.name} </h1>
                    <h1>{ta.name} </h1>
                </div>
            })}
        </div>
    );
}

export default Test;
