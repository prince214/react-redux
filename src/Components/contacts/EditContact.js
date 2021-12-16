import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.editContact)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = Object.assign(contact,{
        name,
        phone,
        email,
      });
      console.log(userData);
    dispatch(updateContact(userData));
    navigate("/");
  };

  useEffect(() => {
      if(contact != null){
          setName(contact.name)
          setEmail(contact.email)
          setPhone(contact.phone)
      }
      dispatch(getContacts(id))
  }, [contact])
  return (
    <div className="card">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
