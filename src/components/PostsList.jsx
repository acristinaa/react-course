import Post from "./Post";
import classes from "./Post.module.css";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Add some posts!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
