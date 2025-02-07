import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import LoginForm from "./components/RegisterForm";
import LoginForm2 from "./components/LoginForm2";
import Influncer from './components/Influencer';
import Header from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer";


// App Component
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm2 />} />
          <Route path="/infleuncer" element={<Influncer />} />
          <Route path="/Brand" element />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;