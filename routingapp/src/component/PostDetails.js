import React,{Component} from 'react';
const url = "http://localhost:8900/topics"

class PostDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    componentDidMount(){
        fetch(`${url}/${this.props.match.params.topic}`,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                details:data
            })
        })
    }
    render(){
        console.log(this.props)
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    PostDetails Page
                </div>
               <div className="panel-body">
                   <h1>Details of {this.state.details.name}</h1>
                   <p>{this.state.details.details}
                   </p>
               </div>
            </div>
        )
    }
}

export default PostDetails;