import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContact, clearSelectedContact,deleteContact } from "../../actions/contactAction";
import Avatar from "react-avatar";

const UserRow = ({ user, selectAll }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  let [checkStatus, setCheckStatus] = useState(false);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  
  const markAsChecked = (id) => {
    let data = contacts.filter((user) => {
      if(user.id === id) return user.id
    })
    let idArr = [data[0].id]
    setCheckStatus(!checkStatus);
    dispatch(selectAllContact(idArr))
  }
  return (
    
    <tr>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" onChange={() => markAsChecked(user.id)} checked={selectAll || checkStatus} />
          <label className="custom-control-label"></label>
        </div>
      </th>
      <td>
        <Avatar name={user.name} size="45" round={true} className="me-2" /> {user.name}
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <Link to={`/contact/edit/${user.id}`}>
        <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons text-danger" onClick={() => handleDeleteContact(user.id)}>delete</i>
      </td>
    </tr>
  );
};

export default UserRow;
