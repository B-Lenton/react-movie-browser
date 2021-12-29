import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import HomeView from './components/Home'
import AboutView from './components/About';
import SearchView from './components/Search';
import MovieView from './components/Movies';
import NotFoundView from './components/NotFound';
import { Switch, Route } from 'react-router-dom';

// TMDB API KEY = 69baf2a162df28c2b30f133008f756b0


function App() {
  //   [var you access, func you set that state to]
  const [searchResults, setSearchResults] = useState([]);  // want an [array] so that the results from the fetch() can be looped through easily
  // whenever searchText is changed using this function, it will re-render the entire application (way around that with useEffect)
  const [searchText, setSearchText] = useState('');
  // in react 101, we used class-based components and this.state to set state...
  // but in react 201, we are using function-based components so we use a hook (useState) instead!

  // The Effect Hook lets you perform side effects (e.g. data fetching, setting up a subscription, 
  // manually changing the DOM in React components) in function components:
  useEffect(() => {
    if(searchText) {  // request wrapped in IF statement to prevent empty dataset returning and causing an error
      if(searchText === ' '){
        console.warn("spaces aren't allowed");
        alert("Please do not begin your search with a space");
      } else {
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=69baf2a162df28c2b30f133008f756b0&language=en-US&query=${searchText}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
              setSearchResults(data.results)
            })
        }
      }
    }, [searchText])

  return (
    <div>
      {/* taking data from Navbar (flowing through our app - see consts above) & into search view with props */}
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        {/* can write Routes either way: embedding it as an element or adding it as a prop*/}
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          {/* searchText (string) & searchResults [array] are props of the SearchView, to be passed in & rendered*/}
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*">
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
