import React,{Component} from 'react';

class PostDetails extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    PostDetails Page
                </div>
               <div className="panel-body">
                   <h1>Details of {this.props.match.params.topic}</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ...
                   </p>
               </div>
            </div>
        )
    }
}

export default PostDetails;