import React,{Component} from 'react';
import Logout from "./Logout";
import {connect} from 'react-redux';
import * as Actions from '../store/actions'



class Secured2 extends Component{

    componentDidMount() {
        this.props.onStart();
    }


    render(){
        console.log("Authenticated: "+ this.props.authenticated);

        if(this.props.authenticated){
            return(<div>
                    <p>{this.props.username}</p> <Logout keycloak={this.props.keycloak} />
                </div>
            )
        }
        else return (<div>Unable to authenticate!</div>)
    }
}

const mapStateToProps = state => {return {
    keycloak: state.keycloak,
    authenticated: state.authenticated,
    username: state.username
}};

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch(Actions.login())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Secured2);