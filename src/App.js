import {useState} from 'react'
import Contacts from "./Components/contacts/Contacts";
import NavBar from "./Components/NavBar";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import AddContacts from "./Components/contacts/AddContacts";
import EditContact from "./Components/contacts/EditContact";
import Spinner from "./Components/Spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './Components/Posts/AddPost'
import Post from './Components/Posts/Post'
import Posts from './Components/Posts/Posts'
import UpdatePost from './Components/Posts/UpdatePost'

function App() {
  const [loading,setLoading] = useState(false)
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="py-3">
          {
            loading && <Spinner />
          }
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/contact/add" element={<AddContacts />} />
            <Route path="/contact/edit/:id" element={<EditContact />} />
            <Route path="/allPosts" element={<Posts />} />

            <Route exact path="/allPosts" element={<Posts />} />
            <Route exact path="/addPost" element={<AddPost />} />
            <Route exact path="/post/:id" element={<Post />} />
            <Route exact path="/updatePost/:id" element={<UpdatePost />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
