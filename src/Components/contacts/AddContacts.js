import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../actions/contactAction";
import shortid from "shortid";
import {useNavigate} from "react-router-dom";

const AddContacts = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContacts(userData));
    navigate("/");
  };
  return (
    <div className="card">
      <div className="card-header">Add Contact</div>
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
              type="number"
              min="10"
              max="10"
              className="form-control"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContacts;
