import { Outlet } from "react-router-dom";
import PostsList from "../PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const response = await fetch('http://localhost:8080/posts');
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const resData = await response.json();
    return resData.posts;
  } catch (error) { // Changed from Error to error
    // Instead of throwing a new error, return an empty array
    return [];
    // Or if you prefer to show an error UI:
    // throw json(
    //   { message: 'Could not fetch posts.' },
    //   { status: 500 }
    // );
  }
}


//ORIGINAL
/*export async function loader() {
  const response = await fetch('http://localhost:8080/posts/');
  const resData = await response.json();
  return resData.posts;
} */