import { useHistory, Link } from 'react-router-dom';

// a functional component (different to class-based components) would use...
// function Navbar() {...}
// but we're using, still a function but using const:
const Navbar = ({ searchText, setSearchText }) => {  // deconstructing the props for search
  const history = useHistory();
  // on input/other event, do something with the value of it
  const updateSearchText = (e) => {
    history.push('/search')  // forces the user to go to the search page when typing in search bar
    setSearchText(e.target.value)
  };

  // sends users to the search results upon clicking search / pressing enter:
  const searchSubmit = (clicked) => {
    // unless the click event is explicity handled, default action should not be taken as it normally would:
    clicked.preventDefault();
    history.push("/search");  // send user to the search results
  };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* rather than using <a href>, use <Link to> for instant 
            loading of Views without reloading page (enabled by using 
            a router (see above import and App.js layout)*/}
          <Link className="navbar-brand" to="/">
            Movie Browser
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="go-to-somewhere" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="go-to-somewhere">Action</Link></li>
                  <li><Link className="dropdown-item" to="go-to-somewhere">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="go-to-somewhere">Something else here</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link disabled" to="/">Coming soon</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                value={searchText} onChange={updateSearchText} />
                {/* fixed search button with onClick={searchSubmit} which is defined above (~line 14~) */}
              <button className="btn btn-outline-success" type="submit" onClick={searchSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
  }


export default Navbar;