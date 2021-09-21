import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
class Header extends Component {


    submitHandler=(evt)=>  {

evt.preventDefault();
let{history}=this.props;
history.push('/movies?searchText='+this.refs.searchTf.value);

}
    
    render() {
        return (
            



<div className="alert alert-primary">


    <div className="container">

        <div className="row">
            <div className="col-md-4">
<h3>
    <Link to="/" style={{textDecoration:'none'}}>      
    Movlix</Link></h3>
            </div>
            <div className="col-md-8">
<form onSubmit={this.submitHandler}>
<input type="search" ref="searchTf"placeholder="Search Movies.." className="form-control"/>
      

      </form>
            </div>
        </div>
    </div>
</div>

        );
    }
}

export default withRouter(Header);