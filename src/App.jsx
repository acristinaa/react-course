import { useState } from 'react'
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
//import Modal from './components/Modal';


function App() {
  const [visibleModal, setModalVisible] = useState(false);

  function showModalHandler(){
    setModalVisible(true);
  }

  function hideModal(){
    setModalVisible(false);
  }

  return (
  <>
  <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostsList isPosting={visibleModal} onStopPosting={hideModal}/>
    </main>
    </>
  );
}

export default App;
