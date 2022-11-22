import { useState } from "react";

const useBasic = (checkValidity) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInputValid = checkValidity(inputValue);
  const hasError = isInputTouched && !isInputValid;

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(isInputValid);
  };

  const inputBlurHandler = (e) => {
    setIsInputTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setIsInputTouched(false);
  };

  return {
    inputValue,
    isInputValid,
    hasError,
    inputHandler,
    inputBlurHandler,
    resetInput
  };
};

export default useBasic;
