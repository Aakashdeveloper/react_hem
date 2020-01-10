import React, {Component} from 'react';
import { connect } from 'react-redux';
import { topics } from '../actions';
import PropTypes from 'prop-types';
import TopicListing from '../component/topicListing';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(topics())
    }

    render(){
        return(
           <div>
               <TopicListing mydata={this.props.topicdata.tdata}></TopicListing>
           </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        topicdata: state.tpc
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);