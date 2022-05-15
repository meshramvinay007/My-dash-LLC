import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import './Form.scss'

export default function Form({setRegistered}) {
  const {
    value: enteredName,
    hasError: enteredNameHasError,
    isValid: nameIsValid,
    handleChange: nameChangeHandler,
    handleBlur: nameBlurHandler,
    reset: resetName,
    valueTouched: nameIsTouched,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    handleChange: emailChangeHandler,
    handleBlur: emailBlurHandler,
    reset: resetEmail,
    valueTouched: emailIsTouched,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    handleChange: passwordChangeHandler,
    handleBlur: passwordBlurHandler,
    reset: resetPassword,
    valueTouched: passwordIsTouched,
  } = useInput((value) => value.trim().length >= 8);

  const {
    value: enteredConfirmPassword,
    hasError: confirmPasswordHasError,
    isValid: confirmPasswordIsValid,
    handleChange: confirmPasswordChangeHandler,
    handleBlur: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
    valueTouched: confirmPasswordIsTouched,
  } = useInput((value) => value.trim() !== "" && value === enteredPassword);

  const {
    value: enteredPhoneNumber,
    hasError: phoneNumberHasError,
    isValid: phoneNumberIsValid,
    handleChange: phoneNumberChangeHandler,
    handleBlur: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
    valueTouched: phoneNumberIsTouched,
  } = useInput(
    (value) =>
      value.trim().length === 10 &&
      (value[0].includes(9) || value[0].includes(8) || value[0].includes(7)) &&
      !isNaN(value)
  );

  const [isClicked, setClicked] = useState(false);
  const history = useHistory();

  const handleCheck = (e) => {
    setClicked(!isClicked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nameIsTouched();
    emailIsTouched();
    phoneNumberIsTouched();
    passwordIsTouched();
    confirmPasswordIsTouched();
    // resetName();

    if (
      !nameIsValid ||
      !emailIsValid ||
      !passwordIsValid ||
      !confirmPasswordIsValid ||
      !phoneNumberIsValid
    ) {
      return;
    }

    console.log(
      enteredName,
      enteredEmail,
      enteredPassword,
      enteredConfirmPassword,
      enteredPhoneNumber
    );

  

    setRegistered(true);
    history.push('/dashboard')

    resetName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
    resetPhoneNumber();
       
  };

  return (
    <div className="col-lg-6">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h3 className="form__heading">Create an account</h3>
        <div className="form__div">
          <label htmlFor="email" className="form__label is--grey">
            Your email address
          </label>
          <br />
          <input
            name="email"
            type="text"
            className="form__input"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && (
            <p className="error__message">Enter an valid email</p>
          )}
        </div>
        <div className="form__div">
          <label htmlFor="password" className="form__label is--grey">
            Your password
          </label>
          <br />
          <input
            name="password"
            type="password"
            className="form__input"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordHasError && (
            <p className="error__message">
              Your password length should be greater than or equal to 8.
            </p>
          )}
        </div>
        <div className="form__div">
          <label htmlFor="confirmPassword" className="form__label is--grey">
            Confirm your password
          </label>
          <br />
          <input
            name="confirmPassword"
            type="password"
            className="form__input"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            value={enteredConfirmPassword}
          />
          {confirmPasswordHasError && (
            <p className="error__message">
              Your confirm password should match your password.
            </p>
          )}
        </div>
        <div className="form__div">
          <label htmlFor="name" className="form__label is--grey">
            Your full name
          </label>
          <br />
          <input
            name="name"
            type="text"
            className="form__input"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {enteredNameHasError && (
            <p className="error__message">Enter a valid name</p>
          )}
        </div>
        <div className="form__div">
          <label htmlFor="number" className="form__label is--grey">
            Your phone number
          </label>
          <br />
          <input
            name="phone"
            type="text"
            className="form__input is--half"
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
            value={enteredPhoneNumber}
          />
          {phoneNumberHasError && (
            <p className="error__message">Enter a valid phone number</p>
          )}
        </div>
        <div className="form__div">
          <input
            type="checkbox"
            name="tandc"
            className="form__checkbox"
            onChange={handleCheck}
            value={isClicked}
          />
          <label htmlFor="tandc" className="form__label is--black">
            I read and agree Terms and Conditions
          </label>
        </div>
        <button type="submit" className={!isClicked ? "form__button inactive":"form__button"} disabled={!isClicked}>
          Create account
        </button>
      </form>
    </div>
  );
}
