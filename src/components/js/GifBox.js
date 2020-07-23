import React, { useState, useEffect } from 'react'
import Gif from "./Gif"
import "../css/GifBox.css";

const GifBox = () => {
    const [gifs, setGifs] = useState([{ images: { original: {} } }]);
    const [searchLimit, setSearchLimit] = useState(10);

    useEffect(() => {
        const getGifs = async () => {
            const res = await fetch(`http://api.giphy.com/v1/gifs/trending?limit=${searchLimit}&api_key=ZDuj4tNnrZX3zYnwoQD5yofmmmlU2oSW`);
            const data = await res.json();

            setGifs(data.data);
        }

        getGifs();
    }, [searchLimit]);

    const increaseSearchLimit = () => {
        var limit = searchLimit + 10;
        setSearchLimit(limit);
    }



    console.log(gifs[0].images.original.url);
    return (
        <>
            <main className="gif-box">
                <section className="desc">
                    <h1>The latest trending gifs from GIFY</h1>
                </section>
                <section >
                    <div className="grid-container">
                        {gifs.map(gif => {

                            return (
                                <Gif key={gif.id} title={gif.title} imgURL={gif.images.original.url} />
                            )
                        })}

                    </div>
                    <div className="btn-holder">
                        <button className="btn" onClick={increaseSearchLimit}>Load More</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GifBox
