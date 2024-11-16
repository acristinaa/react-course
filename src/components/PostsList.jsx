import { useState } from 'react';
import Post from "./Post";
import NewPost from './NewPost';
import classes from './Post.module.css';
import Modal from './Modal'

function PostsList() {
  const [visibleModal, setModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModal(){
    setModalVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
    {visibleModal ? <Modal onClose={hideModal}>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      </Modal> : false}
    
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Sara" body="Check it out" />
      </ul>
    </>
  );
}

export default PostsList;
