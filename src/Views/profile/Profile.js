import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SpaceEmpty } from '../../Component/main/Main';
import gStyle from '../../Assets/css/general.module.css';
import profileImg from '../../Assets/img/profile-img.png';
import bombChicken from '../../Assets/img/bomb-chicken.png';
import "./style.css";


const Profile = () => {
    const sect1 = {
        height: "400px"
    }

    const pProfileSize = {
        // width: "172px",
        // height: "172px",
        width: "100%",
        height: "100%",
        
    }

    const buttonSize = {
        width: "100%",
        width: "100px",
        cursor: "pointer",
        backgroundColor: "#00000068"
    }

    const line = {

        borderBottom: "3px #0000009c solid"
    }

    const buttonBootstrapReset = {
        backgroundColor: "none"
    }

    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <SpaceEmpty />

            {/* sect1 */}
            <div className='w-100 d-flex flex-column justify-align-center align-items-center ' style={sect1}>
                <div className={`${gStyle['w-30']} d-flex flex-column justify-align-center align-items-center `}>
                    <div className={`borderRadius`}>
                        <img src={profileImg} alt="" style={pProfileSize} />
                    </div>
                    <div className={`${gStyle['w-30']}  text-end mb-2`}>
                        <button className={`${gStyle['bg-color-yellow']} btn-customize`}>
                            <i className="w-100 bi bi-pencil"></i>
                        </button>
                    </div>
                    {/* collapse */}
                        <div id="example-collapse-form ">
                            <div className=" mb-2" style={buttonSize}>
                                <input type="file" id="files" className="hidden" />
                                <label for="files" className="airbnb-md" style={buttonSize}>
                                    Change Photo Profile
                                </label>
                            </div>
                            <div className=" mb-2" style={buttonSize}>
                                <Link className='text-decoration-none text-dark' to="/user/change_password"><p className={`${gStyle['airbnb-md']}`}>Change Password</p></Link>
                            </div>
                        </div>
                    {/* collapse */}

                    <div className={`  text-center `}>
                        <p className='h3'>Garneta Sharina</p>
                    </div>

                    <div className={`${gStyle['w-70']}`}>
                        <div style={line}>

                        </div>
                    </div>


                </div>
            </div>
            {/* end of sect1 */}

        </Fragment>
    )
}


export default Profile