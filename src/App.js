import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="App">
      <Header user= {user} />
      <div className="main">
        <Sidebar user= {user} />
        <Form setUser= {setUser} />
      </div>
    </div>
  );
}

export default App;
