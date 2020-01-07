import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = (props) =>{

    const listdata = ({topicdata}) => {
        if(topicdata){
            return topicdata.map((item) => {
                return(
                    <div>
                        <h3>{item.name}</h3>
                        <Link to={`/posts/${item.id}`}>details>></Link>
                    </div>
                    
                )
            })
        }
    }

    return(
        <div>
            {listdata(props)}
        </div>
    )
}

export default TopicList;