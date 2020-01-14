import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { posttopics } from '../actions';

class FormContainer extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            details:''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangeDetails(event){
        this.setState({details:event.target.value})
    }

    handleSubmit(event){
        this.props.posttopics(this.state.name, this.state.details);
        alert('data added')
    }
    render(){
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    Form
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            className="form-control"
                            id="name"/>
                        </div>
                        <div className="form-group">
                            <label>Details</label>
                            <input type="text"
                            value={this.state.details}
                            className="form-control"
                            onChange={this.handleChangeDetails}
                            id="details"/>
                        </div>
                        <button type="submit" className="btn btn-success"
                        onClick={this.handleSubmit}>
                            
                            Submit
                        </button>
                    </form>
                </div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({posttopics},dispatch)
}

export default connect(null,mapDispatchToProps)(FormContainer)
