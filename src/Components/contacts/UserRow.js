import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../actions/contactAction";
import Avatar from "react-avatar";

const UserRow = ({ user, selectAll }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <tr>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" checked={selectAll} />
          <label className="custom-control-label"></label>
        </div>
      </th>
      <td>
        <Avatar name={user.name} size="45" round={true} />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <Link to={`/contact/edit/${user.id}`}>
        <i class="material-icons">edit</i>
        </Link>
        <i class="material-icons text-danger" onClick={() => handleDeleteContact(user.id)}>delete</i>
      </td>
    </tr>
  );
};

export default UserRow;
