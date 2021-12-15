import React from "react";
import { Link } from "react-router-dom";

const UserRow = ({ user }) => {
  return (
    <tr>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </th>
      <td>
        <img src={user.picture} alt="user img" />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
          <Link to={`/contact/edit/${user.id}`} className="btn btn-primary me-2">Edit</Link>
          <button type="button" className="btn btn-danger">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
