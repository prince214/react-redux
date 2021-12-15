import Contacts from "./Components/contacts/Contacts";
import NavBar from "./Components/NavBar";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import AddContacts from "./Components/contacts/AddContacts";
import EditContact from "./Components/contacts/EditContact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="py-3">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/contact/add" element={<AddContacts />} />
            <Route path="/contact/edit/:id" element={<EditContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
