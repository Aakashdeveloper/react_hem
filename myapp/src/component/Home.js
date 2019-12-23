import React , {Component } from 'react';
import JSON from '../db.json';
import Header from './Header';
import NewsList from './NewsList';

class Home extends Component {

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList newsData={this.state.news}/>
            </div>
        )
    }
}


export default Home;