    import React, { Component } from 'react';
import Axios from 'axios';
import querystring from 'query-string'


class MovieDetails extends Component {
    state = {movie:{}  }

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
Axios.get(`http://www.omdbapi.com/?apikey=71915d84&i=${q.imdbID}`)
    .then(Response=>Response.data)  
.then(movie=>this.setState({movie}))

}

    render() {
        let {movie}=this.state;
        let output=<div className="text-center">
            <img src="/images/Progressbar.gif" alt="loading..."/> 
             </div>
        if(movie && Object.keys(movie).length>0){
output= <div className="row">
<div className=" col-md-4">
    <img src={movie.Poster} alt={movie.Title} className="img img-thumbnail"/>
    <div className="mt-3 col-md-2">
<button type="button" className="btn btn-outline-success btn-lg">Download Now </button>
</div>
</div>



<div className="col-md-8">
        <h1>{movie.Title}</h1>
        <table className="table">
            <tbody>
                <tr>
                    <td>Director</td>
        <td>{movie.Director}</td>
                </tr>
                <tr>
                    <td>Plot</td>
                    <td>{movie.Plot}</td>
                </tr>
                <tr>
                    <td>Year</td>
        <td>{movie.Year}</td>
                </tr>
                <tr>
                    <td>Language</td>
        <td>{movie.Language}</td>
                </tr>
                <tr>
                    <td>Writer</td>
        <td>{movie.Writer}</td>
                </tr>
                <tr>
                    <td>Awards</td>
        <td>{movie.Awards}</td>
                </tr>
                <tr>
                    <td>Genre</td>
        <td>{movie.Genre}</td>
                </tr>
                <tr>
                    <td>Actors</td>
        <td>{movie.Actors}</td>
                </tr>
                <tr>
                    <td>Box office</td>
        <td>{movie.BoxOffice}</td>
                </tr>
                <tr>
                    <td>Released</td>
        <td>{movie.Released}</td>
                </tr>
                <tr>
                    <td>
                    
</td>
        
                </tr>
                
            </tbody>

        </table>
        
<button className="btn btn-primary" 
onClick={ ()=>this.props.history.go(-1)}>Back</button>
</div>
            </div>


        }
        return output;
    }
}

export default MovieDetails;