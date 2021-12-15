import React from "react";
import { useSelector } from "react-redux";
import UserRow from "./UserRow";

const Contacts = () => {

    const contacts = useSelector(state => state.contacts.contacts)

  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th scope="col" className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
            </th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
         {
             contacts.map((user) => (
                <UserRow user={user} key={user.id} />
             ))
         }
          
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
