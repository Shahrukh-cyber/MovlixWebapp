import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Axios from 'axios';
import querystring from 'query-string'

class MovieList extends Component {
    state = { movies:[] }

    componentDidMount(){
        this.fetchMovies();
        console.log('this.props',this.props)


    }
    componentDidUpdate(prevProps){
if(this.props.location!==prevProps.location){
this.fetchMovies();

}

    }

fetchMovies=()=>{
let q=querystring.parse(this.props.location.search)
Axios.get(`http://www.omdbapi.com/?apikey=71915d84&s=${q.searchText}`)
    .then(Response=>Response.data)
    .then(data=>data.Search)
.then(movies=>this.setState({movies}))

}
        render() {
const movieList=this.state.movies.map(m=><MovieCard movie={m} key={m.imdbID}/>)



        return (
            <div className="row">

                {movieList}
            </div>
        );
    }
}

export default MovieList;