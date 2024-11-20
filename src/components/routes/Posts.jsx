import {Outlet} from 'react-router-dom'
import PostsList from "../PostsList";
//import Modal from './components/Modal';


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
