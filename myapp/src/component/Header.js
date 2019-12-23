import React,{Component} from 'react';
import './header.css'

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'React App',
            userInput:'User text here'
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({userInput:event.target.value})
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log("Something Clicked")}}>
                    {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChanges.bind(this)}/>
                    <h3>{this.state.userInput}</h3>
                </center>
            </header>
        )
    }
}

export default Header;