import React from "react";

const ReadOnlyRow = ({ contact, handlerEditClick, handlerDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handlerEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handlerDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
