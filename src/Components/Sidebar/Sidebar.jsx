import React from 'react';
import './Sidebar.css';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
        <ul>
            <li><a href="http://www.google.com">Home</a></li>
            <li><a href="http://www.google.com">About</a></li>
            <li><a href="http://www.google.com">Contact</a></li>
            <li><a href="http://www.google.com">Blog</a></li>
            <li><a href="http://www.google.com">Hello, {props.user.name}!</a></li>
        </ul>
    </div>
  )
}
