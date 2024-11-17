import { useState } from 'react';
import Post from "./Post";
import NewPost from './NewPost';
import classes from './Post.module.css';
import Modal from './Modal'

// eslint-disable-next-line react/prop-types
function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");


  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
    {isPosting ? <Modal onClose={onStopPosting}>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
        onCancel={onStopPosting}
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
