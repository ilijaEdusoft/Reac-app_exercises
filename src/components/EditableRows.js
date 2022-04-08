const EditableRows = ({
  editFormData,
  handlerEditFormChange,
  handlerCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handlerEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handlerEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handlerEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an e-mail..."
          name="email"
          value={editFormData.email}
          onChange={handlerEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="submit" onClick={handlerCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRows;
