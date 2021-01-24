import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {Work} from "./work";
import {About} from "./about";
import {Home} from "./home";


export class Header extends React.Component{

    render(){
        return(
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand home-button"><Link to="/">Meghan Fahy</Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item work-button mr-4"> <Link to="/work">Work </Link></li>
                        <li className="nav-item about-button"><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

        <Route path="/" exact component={Home}/>
          <Route path="/work" exact component={Work}/>
          <Route path="/about" exact component={About}/>
            </Router>
        )
    }
}

export default  Header;