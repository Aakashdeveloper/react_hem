import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Posts extends Component {
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Posts Page
                </div>
               <div className="panel-body">
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ...
                   </p>
                   <div>
                      <h3>Angular</h3>
                      <Link to="/posts/angular">details>></Link>
                      <h3>React</h3>
                      <Link to="/posts/react">details>></Link>
                      <h3>Node</h3>
                      <Link to="/posts/node">details>></Link>
                      <h3>MongoDB</h3>
                      <Link to="/posts/mongodb">details>></Link>
                      <h3>AWS</h3>
                      <Link to="/posts/aws">details>></Link>
                   </div>
               </div>
            </div>
        )
    }
}

export default Posts;