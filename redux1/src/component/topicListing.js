import React from 'react';

const TopicListing = (props) => {

    const listing = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <ul>
                            <li>
                                <h2>{item.name}</h2>
                                <p>{item.details}</p>
                            </li>
                        </ul>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {listing(props)}
        </div>
    )
}

export default TopicListing;