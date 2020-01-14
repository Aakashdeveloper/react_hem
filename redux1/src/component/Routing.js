import React from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';
import Home from '../container/Home';
import FormContainer from '../container/forms';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">Apax</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/forms">Form</Link></li>
                    </ul>
                    
                    </div>
                </div>
                </nav>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/forms" component={FormContainer}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;