import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import noImg from "../images/default-image.jpg";


const MovieView = () => {
    // pull the ID number from the url and use it
    const { id } = useParams();
    const [ movieDetails, setMovieDetails ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=69baf2a162df28c2b30f133008f756b0&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)  // this takes the data from the api request and puts it into movieDetails
                setIsLoading(false)
            })
    }, [id])  // 2nd param (id) is what it is looking for; whenevr it finds an id, it'll make a request


    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            // TODO: What if there is no posterPath & it comes back as null - deal with it in a conditional
            const posterPath = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            {posterPath !== "https://image.tmdb.org/t/p/originalnull" ? (  // if an image DOES exist...
                                // use that image on the page (the question mark means "do this")...
                                <img src={posterPath}  // film's poster image from the json data
                                    alt={movieDetails.original_title}  // alt is its title
                                    className="img-fluid shadow rounded"
                                />
                                // loads default image if an image is not received from the api request
                                // TODO: works well but default image appears while actual images are loading
                            ) : ( // the colon means "otherwise, do this"
                                <img src={noImg}  // pseudo name for the default-image.jpg (see imports)
                                    alt={movieDetails.original_title}  // alt is its title
                                    className="img-fluid shadow rounded"
                                />
                            )}
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </>
            )
        } 
    }

    return renderMovieDetails()  // cleaned up the main return by just returning the function, where all the code is
};

export default MovieView;