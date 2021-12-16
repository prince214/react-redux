import React, { useState, useEffect } from "react";
import UserRow from "./UserRow";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContact, clearSelectedContact, deleteSelectedContact } from "../../actions/contactAction";

const Contacts = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const [selectAll,setSelectAll] = useState(false);
    const dispatch = useDispatch()
    const selectedContacts = useSelector(state => state.contacts.selectedContacts);

    useEffect(() => {
      if(selectAll){
        let data = contacts.map((user) => user.id)
        dispatch(selectAllContact(data))
      }else{
        dispatch(clearSelectedContact())
      }
    },[selectAll])

  return (
    <div>
      {selectedContacts.length > 0 && (
        <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteSelectedContact())}>Delete All</button>
      )} 
      <table className="table shadow">
        <thead>
          <tr>
            <th scope="col" className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" value={selectAll}
                  onClick={() => setSelectAll(!selectAll)} />
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
                <UserRow user={user} key={user.id} selectAll={selectAll} />
             ))
         }
          
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
