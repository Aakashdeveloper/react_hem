import React,{Component} from 'react';
import './home.css'

class Home extends Component {
    constructor(){
        super()

        this.state={
            title:'React App',
            keywords:'User input here'
        }
    }

    inputChange(event){
        this.setState({keywords:event.target.value})
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log("logo clicked")}}
                >{this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.keywords}</p>
                </center>
            </header>
        )
    }
}

export default Home;
