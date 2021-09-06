// import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileDataReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      const action = addPostActionCreator(postText);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// ------- old one wtih props -------
// const MyPostsContainer = (props) => {

//   const state = props.store.getState();

//   const postChange = (postText) => {
//     const action = updatePostTextActionCreator(postText);
//     props.store.dispatch(action);
//   }

//   const addPost = () => {
//     const action = addPostActionCreator();
//     props.store.dispatch(action);
//   }

//   return (
//     <MyPosts
//       profileData={state.profileData}
//       addPost={addPost}
//       postChange={postChange}
//     />
//   )
// }
// ------- old one wtih props -------
