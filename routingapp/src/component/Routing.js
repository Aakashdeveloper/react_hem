import React,{Component} from 'react';
import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import PostDetails from './PostDetails';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import LifeCycle from './lifecycle';

class Routing extends Component{
    render(){
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
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/lifeCycle">LifeCycle</Link></li>
                    </ul>
                    
                    </div>
                </div>
                </nav>
                <Route exact  path='/' component={Home}></Route>
                <Route exact path='/posts' component={Posts}></Route>
                <Route exact path='/posts/:topic' component={PostDetails}></Route>
                <Route exact path='/profile' component={Profile}></Route>
                <Route exact path="/lifeCycle" component={LifeCycle}></Route>
            </div>
        </BrowserRouter>
        )
    }
}

export default Routing;
