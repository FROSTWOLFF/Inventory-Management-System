import { useState } from 'react';

function useInput() {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
  };

  return {
    value: inputValue,
    changeHandler: inputChangeHandler,
  };
}
export default useInput;
