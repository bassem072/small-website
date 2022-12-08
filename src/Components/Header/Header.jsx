import React from 'react'
import './Header.css';

export default function Header(props) {
  return (
    <div className="header">
        <h1> {props.user.name} </h1>
        <p> {props.user.email} </p>
    </div>
  )
}
