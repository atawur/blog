import React from "react";
import { connect } from "react-redux";
import { allPost } from "../store/actions/postActions";
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";
import ReactPaginate from 'react-paginate';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
class Post extends React.Component {
 
    componentWillMount(){
        this.props.allPost()
    }

 
    renderPosts(posts) {
        return posts.map((post) => {
          return (
            <li className="list-group-item" key={post.id}>
               
                <strong>{post.title}</strong>
               
               
            </li>
          );
        });
      }

  render() {
    const {posts} = this.props.postsList;
    //console.log('poat com',this.props.postsList)
    const columns = [
        {
          Header:"Title",
          accessor:"title",
          style:{
            textAlign:"left"
          }
        },{
          Header:"Short Description",
          accessor:"sort_description"
        },
        {
          Header:"Action",
          Cell:props=>{
            return(
              <div>
                <button className="btn btn-success">Edit</button>
                <span> </span>
                <button className="btn btn-danger">Delete</button>
              </div>
            )
          },
          sortable:false,
          filterable:false,
        }
      ]
    return (
      <div className="my-5">
        
         <ReactTable
              columns={columns}
              data={posts}
              filterable
              defaultPageSize={10}
              // showPaginationTop
              noDataText={"Please Wait"}
            >

            </ReactTable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    postsList:state.postsList.postsList
    //postsList:state.posts
});

export default connect(
  mapStateToProps,
  { allPost }
)(Post);
