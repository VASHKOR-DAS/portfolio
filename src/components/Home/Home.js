import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Router>

                <Navbar />

                <Routes>

                    <Route exact path='/' element={<Header />}></Route>
                    <Route path='/home' element={<Header />}></Route>
                    <Route path='/skill' element={<Skill />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>

                </Routes>
            </Router>
        </div>
    );
};

export default Home;