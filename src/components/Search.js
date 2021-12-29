import Hero from './Hero'
import { Link } from 'react-router-dom';
import noImg from "../images/default-image.jpg";

// returning html (mainly bootstrap) to display the search results as cards:
const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`  // show the page url as /movies/the id of the selected movie
    return (
        <div className="col-lg-3 col-md-4 col-6 my-4">
        <div className="card border border-4 border-secondary rounded">
            {posterUrl !== "https://image.tmdb.org/t/p/original/null" ? (
                <img src={posterUrl} className="card-img-top border-bottom border-2 border-secondary" alt={movie.original_title} />
            ) : (
                <img src={noImg} className="card-img-top" alt={movie.original_title} />
            )}
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                {/* link goes to the detailUrl variable, defined above (const) */}
                <Link to={detailUrl} className="btn btn-primary">Show details</Link>
            </div>
        </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    // for every result, loop through all of them (obj) & get the index number
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            {/* using the prop from Hero.js to create dynamic content and...
            populating it with the above template literal using user input */}
            <Hero text={title} />
            {/* catch empty search results by checking the length of the resultsHtml array */}
            {resultsHtml.length !== 0 ? (
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            ) : (
                <div className="container m-5">
                    <div className="text-center py-5">
                        <p className="lead">No search results found...</p>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default SearchView;