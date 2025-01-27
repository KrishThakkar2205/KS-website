import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import Header from "./Navbar";
import Footer from "./footer";
import LoginForm2 from "./LoginForm";
import LoginForm from "./form";
import Infleuncer from "./infleuncer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Footer Component

// App Component
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/register" element = {<LoginForm/> } />
          <Route path="/login" element = { <LoginForm2 /> } />
          <Route path="/infleuncer" element = { <Infleuncer/> } />
          <Route path="/Brand" element />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
