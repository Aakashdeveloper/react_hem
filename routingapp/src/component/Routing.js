import React,{Component} from 'react';
import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </header>
                <Route exact  path='/' component={Home}></Route>
                <Route exact path='/posts' component={Posts}></Route>
                <Route exact path='/profile' component={Profile}></Route>
            </div>
        </BrowserRouter>
        )
    }
}

export default Routing;
