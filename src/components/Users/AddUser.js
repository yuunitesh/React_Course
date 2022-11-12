import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const BackdropModal = (props) => {
  return (
    <ErrorModal
      title={props.title}
      message={props.message}
      onConfirm={props.onConfirm}
    >
      {props.children}
    </ErrorModal>
  );
};

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(>0)"
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error &&
        ReactDOM.createPortal(
          <BackdropModal
            onConfirm={errorHandler}
            title={error.title}
            message={error.message}
          />,
          document.getElementById("backdrop-root")
        )}

      <Card>
        <form onSubmit={addUserHandler} className="px-4 py-2">
          <label htmlFor="username" className="block font-bold text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-400 rounded-md my-2"
            ref={nameInputRef}
          />
          <label htmlFor="age" className="block font-bold text-lg">
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            className="w-full border border-gray-400 rounded-md my-2"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
