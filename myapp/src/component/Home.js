import React , {Component } from 'react';
import JSON from '../db.json';
import Header from './Header';
import NewsList from './NewsList';

class Home extends Component {

    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })

        this.setState({filtered:output})
    }


    render(){
        return(
            <div>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsList newsData={this.state.filtered}/>
            </div>
        )
    }
}


export default Home;