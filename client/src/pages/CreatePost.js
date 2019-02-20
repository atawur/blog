import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";

import TextInput from "../components/forms/TextInput";
import { savePost } from "../store/actions/postActions";
//
class CreatePost extends React.Component {
  state = {
    title:"",
    sort_description:"",
    error: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
      return {
        error: nextProps.error
      };
    }
    return null;
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    let { title, sort_description } = this.state;
    this.props.savePost({
        title,
        sort_description
    }, this.props.history);
  };

  render() {
    let { title, sort_description, error } = this.state;
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Create  New Post</h3>
            <Form onSubmit={this.submitHandler}>
              <fieldset disabled={this.props.meta.isLoading}>
              <TextInput
                name="title"
                label="Title"
                placeholder="Enter Your Post Title"
                value={title}
                error={error.title}
                changeHandler={this.changeHandler}
              />
              <TextInput
                name="sort_description"
                type="text"
                label="Short Description"
                placeholder="Enter Your Short Description"
                value={sort_description}
                error={error.sort_description}
                changeHandler={this.changeHandler}
              />
              
                <Button color="primary"> Save </Button>
              </fieldset>
              
              
            </Form>
            {Object.keys(error).length > 0 && (
              <Alert color="danger" className="my-4">
                <ul>
                  {Object.keys(error).map(err => {
                    return <li key={err}> {error[err]} </li>;
                  })}
                </ul>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  meta: state.meta
});

export default connect(
  mapStateToProps,
  { savePost }
)(withRouter(CreatePost))
