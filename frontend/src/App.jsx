import React, { useEffect } from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components for Path 
import Home from './components/Home';
import LoginForm from "./components/RegisterForm";
import LoginForm2 from "./components/LoginForm";
import Influncer from './components/Influencer';
import Header from './components/Navbar'
import Footer from "./components/footer";
import Profile from "./components/profile";
import { useDispatch, useSelector } from "react-redux";
import { setInfluencers } from "./redux/influencerSlice";
import axios from "axios";


// App Component
function App() {
  
  //Initializing the influencers inside the redux store
  const dispatch = useDispatch();
  const influencers = useSelector(state => state.influencer.influencers);
  console.log(influencers);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get('https://67a5bd10c0ac39787a1f3d8d.mockapi.io/influencer/user');
        console.log('API has been called!')
        dispatch(setInfluencers(data.data));
      } catch (error) {
        console.log('some error occour ');
        console.log(error);
      }
    }
    if (influencers.length == 0)
      getData();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm2 />} />
          <Route path="/influencer" element={<Influncer />} />
          <Route path="/Brand" element />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;