import Post from "./Post";
import NewPost from './NewPost'
import classes from'./Post.module.css';

function PostsList() {
  return (
    <>
    <NewPost /> 
    <ul className={classes.posts}>
      <Post author="Cristina" body="React.js is awesome!" />
      <Post author="Sara" body="Check it out" />
    </ul>
    </>
  );
}

export default PostsList;
