import { useState } from 'react';

function useInput(validateInput) {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);
  const inputHasError = !inputIsValid && isTouched;

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    hasError: inputHasError,
    changeHandler: inputChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
  };
}
export default useInput;
