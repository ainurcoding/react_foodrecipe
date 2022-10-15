import React, { Fragment } from 'react';
import gStyle from '../../Assets/css/general.module.css'
import banner1 from '../../Assets/img/banner1.jpg';
import bombChicken from '../../Assets/img/bomb-chicken.png';
import bananasPancake from '../../Assets/img/bananas-pancake.png';
import "./style.css";

const MyRecipe = () => {
    
    const card = {
        width: "394px",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }

    return (
        <Fragment>
            <div className={`d-flex flex-row gap-3 mb-3`}>
                <p className={`h1 ${gStyle['airbnb-md']}`}>My Recipe</p>
                <div className={`row overflow-auto`} style={wrapCard}>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

const LikedRecipe = () => {
    const card = {
        width: "max-content",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }
    return (
        <Fragment>
            <div className={`d-flex flex-row gap-3 mb-3`}>
                <p className={`h1 ${gStyle['airbnb-md']}`}>Liked Recipe</p>
                <div className={`row overflow-auto`} style={wrapCard}>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

const SavedRecipe = () => {
    const card = {
        width: "max-content",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }
    return (
        <Fragment>
            <div className={`d-flex flex-row gap-3 mb-3`}>
                <p className={`h1 ${gStyle['airbnb-md']}`}>Saved Recipe</p>
                <div className={`row overflow-auto`} style={wrapCard}>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize'/>
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export {MyRecipe, LikedRecipe, SavedRecipe};