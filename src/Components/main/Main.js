import React, { Fragment, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import gStyle from '../../Assets/css/general.module.css';
import iconActive from '../../Assets/img/user icon activ.png';
import navStyle from '../../Assets/css/navbar.module.css';
import footStyle from '../../Assets/css/footer.module.css';

const Navbar = () => {
    const styles = {
        height: "100px"
    }
    const zIndex = {
        zIndex: "999"
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const data = localStorage.getItem("data");
    }, [])

    

    return (
        <>
            <nav className={`position-fixed w-100 navbar`} style={zIndex}>
                <div className='row w-100'>
                    <div className='col-10'>
                        <div className={`${gStyle['bg-color-white']} p-3 w-100 d-flex align-items-center`} style={styles}>
                            <ul className={` list-unstyled gap-3  d-flex`}>
                                <li className={`${navStyle['resp-text']} ${gStyle['airbnb-lt']} ms-5 `}>
                                    <NavLink to="/landing" exact className={`text-decoration-none ${gStyle['airbnb-bd']} ${gStyle['txt-color-blue']}`} style={({isActive}) =>  isActive ? {borderBottom: "3px solid black"} : {}}>Home</NavLink>
                                </li>
                                <li className={`${navStyle['resp-text']} ${gStyle['airbnb-lt']} ms-5 `}>
                                    <NavLink className={`text-decoration-none ${gStyle['txt-color-blue']}`} to="/add_recipe" style={({isActive}) =>  isActive ? {borderBottom: "3px solid black"} : {}}>Add Recipe</NavLink>
                                </li>
                                <li className={`${navStyle['resp-text']} ${gStyle['airbnb-lt']} ms-5 `}>
                                    <NavLink className={`text-decoration-none ${gStyle['txt-color-blue']}`} to="/profile" style={({isActive}) =>  isActive ?  {borderBottom: "3px solid black"} : {}}>Profile</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className={`w-100 d-flex align-items-center`} style={styles}>
                            <img src={iconActive} alt="login icon" />
                            <p className={` ${gStyle['airbnb-lt']} ${gStyle['txt-color-blue']} p-3`}><Link className={`${navStyle['resp-text']} ${gStyle['airbnb-bd']} ${gStyle['txt-color-blue']}  text-decoration-none h6`} to='/'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

const SpaceEmpty = () => {
    const styleEmpty = {
        height: "100px"
    }
    return (
        <Fragment>
            <div className={` w-100`} style={styleEmpty}>
            </div>
        </Fragment>
    )
}

const Footer = () => {
    return (
        <Fragment>
            <div className={`w-100 ${gStyle['bg-color-yellow-nh']} ${footStyle['footer']} position-absolute d-flex flex-column align-items-center justify-content-center`}>
                <div className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-5`}>
                    <div>
                        <p className={`display-1 ${gStyle['airbnb-md']} text-dark`}>Eat, Cook, Repeat</p>
                    </div>
                    <div className='mb-5'>
                        <p className={`${gStyle['airbnb-lt']} h6`}>Share Your Best Recipe By Uploading Here!</p>
                    </div>
                    <div>
                        <ul className={`d-flex flex-row gap-3 list-unstyled`}>
                            <li>Product</li>
                            <li>Company</li>
                            <li>Learn More</li>
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                </div>    
            </div>

        </Fragment>
    )
}

export { Navbar, Footer, SpaceEmpty };