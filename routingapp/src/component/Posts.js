import React,{Component} from 'react';
import TopicList from './topicsList';

const url = "http://localhost:8900/topics"

class Posts extends Component {
    constructor(){
        super();

        this.state={
            topics:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                topics:data
            })
        })
    }
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Posts Page
                </div>
               <div className="panel-body">
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ...
                   </p>
                   <TopicList topicdata={this.state.topics}/>
               </div>
            </div>
        )
    }
}

export default Posts;