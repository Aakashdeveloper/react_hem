//Get Default State
//Set Initial State
//Before get created
//Render Jsx
//After get created

import React, {Component} from 'react';


class LifeCycle extends Component{

    //1.Get Default State
    constructor(props){
        console.log(">>>>>>In constructor<<<<<<")
        super(props)

        //2. Set Initial State
        this.state={
            title:'LifeCycle'
        }
    }

    //3 Before get created
    componentWillMount(){
        console.log(">>>>>>In componentWillMount<<<<<<")
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>>>In shouldComponentUpdate<<<<<<")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //
    componentWillUpdate(){
        console.log(">>>>>>In componentWillUpdate<<<<<<")
    }

    // 
    componentDidUpdate(){
        console.log(">>>>>>In componentDidUpdate<<<<<<")
    }
    //4 Render Jsx
    render(){
        console.log(">>>>>>In render<<<<<<")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={()=>{this.setState({'title':'SomeThing Else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After get created
    componentDidMount(){
        console.log(">>>>>>In componentDidMount<<<<<<")
    }

    componentWillUnmount(){
        alert("you are leaving the page")
    }
}

export default LifeCycle;