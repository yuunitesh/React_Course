import useBasic from "../hooks/use-basic";

const BasicForm = (props) => {
  //for First name
  const {
    inputValue: firstName,
    isInputValid: firstNameIsValid,
    hasError: isFirstNameHasError,
    inputHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstName
  } = useBasic((inputValue) => inputValue.trim() !== "");

  //for Last name
  const {
    inputValue: lastName,
    isInputValid: lastNameIsValid,
    hasError: isLastNameHasError,
    inputHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastName
  } = useBasic((inputValue) => inputValue.trim() !== "");

  //for email
  const {
    inputValue: email,
    isInputValid: emailIsValid,
    hasError: isEmailHasError,
    inputHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail
  } = useBasic((inputValue) => inputValue.includes("@"));

  let isFormValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }
    console.log(firstName);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClassesHandler = isFirstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClassesHandler = isLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClassesHandler = isEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClassesHandler}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
          />
          {isFirstNameHasError && <p>Please enter a valid first name</p>}
        </div>
        <div className={lastNameClassesHandler}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {isLastNameHasError && <p>Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailClassesHandler}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailHasError && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
