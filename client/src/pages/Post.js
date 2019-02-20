import React from "react";
import { connect } from "react-redux";
import { allPost } from "../store/actions/postActions";
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";
import ReactPaginate from 'react-paginate';
class Post extends React.Component {
 
    componentDidMount(){
        this.props.allPost()
    }

 


  render() {
      console.log(this.props.posts)
   
    //const json = JSON.parse(this.props.posts);
    return (
      <div className="my-5">
     
      </div>
    );
  }
}

const mapStateToProps = state => ({
    posts: state.allPost
});

export default connect(
  mapStateToProps,
  { allPost }
)(Post);
