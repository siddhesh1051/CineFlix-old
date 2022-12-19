import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom";

function Trailer() {
    const [Videos, setVideos] = useState()
    const { id } = useParams();
    useEffect(() => {
        getVideos();
        window.scrollTo(0, 0);
    }, []);

    const getVideos = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=62502f0d2b544611def60f0137ff80c5&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => setVideos(data));
    };
  return (
    <div className="simifg_row">

                    {Videos &&
                        Videos.results &&
                        Videos.results.map((hero) => (
                            <>
                                {hero.key && (
                                    <div className="dg">

                                       
                                        <a href={`https://www.youtube.com/watch?v=${hero.key}`} target='_blank' style={{textDecoration:"none", color:"white"}}>
                                        <div className="fglay">
                                            <div className="cafgls">
                                                <span className="cafgle">{hero.name}</span>
                                                
                                                
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                )}
                            </>
                        ))}

                    
                </div>
  )
}

export default Trailer
