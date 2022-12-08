import React, { useState } from 'react';
import './Form.css';

export default function Form(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setUser({
      name: name,
      email: email,
    });
    setName('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input value={name} type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-group">
            <input value={email} type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
            <input type="submit" placeholder='Add User' />
        </div>
    </form>
  )
}
