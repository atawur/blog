import React from "react";
import { connect } from "react-redux";
import { userList } from "../store/actions/userActions";
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";
class Users extends React.Component {
 
    componentDidMount(){
        this.props.userList()
    }

 //

  submitHandler = event => {
    event.preventDefault();
    let { name, email, password, confirmPassword } = this.state;
    this.props.register({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    });
  };

  render() {
      //console.log(this.props.users)
    let {users} = this.props;
    return (
      <div className="my-5">
      {console.log('kkk',users.userList)}
       {
           
           
        	
          users.reduce((post) =>{
          	return(
            	<li>{post.title}</li>
           )
         })
        }
        
          
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
    users: state.userList
});

export default connect(
  mapStateToProps,
  { userList }
)(Users);
