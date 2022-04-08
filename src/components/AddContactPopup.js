const AddContactPopup = (props) => {
  return (
    <div>
      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={props.handlerAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={props.handlerAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={props.handlerAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an e-mail..."
          onChange={props.handlerAddFormChange}
        />
        <button onClick={props.handlerAddFormSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContactPopup;
