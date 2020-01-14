import React from 'react';

const TopicListing = (props) => {

    const listing = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <div className="panel-body">
                            <ul>
                                <li>
                                    <h2>{item.name}</h2>
                                    <p>{item.details}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                        <h3>Topics app</h3>
                </div>
            {listing(props)}
        </div>
    )
}

export default TopicListing;