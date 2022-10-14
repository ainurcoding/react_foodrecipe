import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SpaceEmpty } from '../../Component/main/Main';
import gStyle from '../../Assets/css/general.module.css';

import './style.css';

const Add_recipe = () => {
    const whMaxContent = {
        width: "max-content",
        height: "max-content",
    }
    const iconSize = {
        width: "52px",
        height: "52px",
        borderRadius: "10px"
    }


    const banner1wh = {
        width: "1081px",
        height: "700px"
    }
    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <div className={`w-100 d-flex justify-content-center align-items-center`}>
                <div className="container w-100 text-center d-flex justify-content-center align-items-center">
                    <div className="row w-100 d-flex justify-content-center align-items-center">
                        <div className=" col-12 mb-3">
                            <div className="box-form-image">
                                <input type="file" id="files" className="hidden" />
                                <label for="files" className="airbnb-md">
                                    <i className="img-icon bi bi-card-image"></i> <br />
                                    Add Photo
                                </label>
                            </div>
                        </div>
                        <div className=" col-12 mb-3">
                            <input type="text" className="input-ar box-form-title airbnb-lt" id="title" placeholder="title" />
                        </div>
                        <div className=" col-12 mb-3">
                            <textarea name="" id="" className="textarea-ar box-form-ing airbnb-lt" cols="30" rows="10" placeholder="ingredients"></textarea>
                        </div>
                        <div className=" col-12 mb-3">
                            <input type="text" className="input-ar box-form-title airbnb-lt" id="video" placeholder="video" />
                        </div>
                        <button className="post-add mb-5" style={{ width: "80%", height: "100px", borderRadius: "10px" }} type="submit">POST</button>
                        <div className="space-empty mb-3"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Add_recipe