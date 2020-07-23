import React from 'react'
import "../css/Gif.css"

const Gif = ({ title, imgURL }) => {
    return (
        <>
            <div className="card">
                <img src={imgURL} alt="" />
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default Gif
