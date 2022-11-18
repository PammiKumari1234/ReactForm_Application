import React, { useState } from 'react';
import './Style.css';

const MultipleInputs = () => {

    
    const [userRegistartion, setuserRegistration]= useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [records, setRecords]= useState([]);

    const handleInput=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        console.log(name,value);

        setuserRegistration({...userRegistartion,[name]:value})
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        const newRecord={...userRegistartion, id:new Date().getTime().toString()}

        setRecords([...records, newRecord]);
        console.log(records);
        setuserRegistration({username:"", email:"", phone:"", password:""})

    }

  return (
    <>
        <form action='' className='form' onSubmit={handleSubmit}>
        <div className='inner-div'>
            <label htmlFor='username'>Fullname</label>
            <input type="text" autoComplete='off'
                value={userRegistartion.username}
                onChange={handleInput}
            name="username" id="username"/> 
        </div>
        <div className='inner-div'>
            <label htmlFor='email'>email</label>
            <input type="text" autoComplete='off' 
                value={userRegistartion.email}
                onChange={handleInput}
            name="email" id="email"/> 
        </div>
        <div className='inner-div'>
            <label htmlFor='phone'>Phone</label>
            <input type="number" autoComplete='off'
                value={userRegistartion.phone}
                onChange={handleInput}
            name="phone" id="phone"/> 
        </div>
        <div className='inner-div'>
            <label htmlFor='password'>Password</label>
            <input type="password" autoComplete='off' 
                value={userRegistartion.password}
                onChange={handleInput}
            name="password" id="password"/> 
        </div>
        <button type="submit" className='btn'>Register</button>
        </form>
        <div className='data'>
            {
                records.map((curElem) =>{
                    return(
                        <div className="showData">
                            <p className='innerData'>Username: {curElem.username}</p>
                            <p className='innerData'>Email: {curElem.email}</p>
                            <p className='innerData'>Phone: {curElem.phone}</p>
                            <p className='innerData'>Password: {curElem.password}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default MultipleInputs
