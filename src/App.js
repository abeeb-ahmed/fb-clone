import './App.css';
import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useStateValue } from "./StateProvider.js"
import Login from './Login';




function App() {
  const [{ user }, dispatch] = useStateValue();

  
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar/>
          <Feed/>
        </div>
        </>

      )}
        
    </div>
  )
};

export default App;
