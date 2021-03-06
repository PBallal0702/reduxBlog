import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    render(){
        const user = this.props.user.find(user=>user.id===this.props.userId)
        
        if(!user){
            return<div>Loading...</div>
        }
        return(
            <div>
               {user.name}
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        user: state.user
    }
}
export default connect(mapStateToProps,{fetchUser})(UserHeader); 