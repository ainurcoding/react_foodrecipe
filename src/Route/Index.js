import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// views
import Login from '../Views/login/Login';
import Home from '../Views/landing/Landing';
import Add_recipe from '../Views/add_recipe/Add_recipe';
import Profile from '../Views/profile/Profile';
import ScrollToTop from '../Components/ScrollToTop';


const Router = () => {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path='/'>
                    <Route index element={<Login/>} />
                    <Route path="landing" element ={<Home/>} />
                    <Route path="add_recipe" element ={<Add_recipe/>} />
                    <Route path="profile" element ={<Profile/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;