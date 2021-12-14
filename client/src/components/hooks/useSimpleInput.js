import { useState } from 'react';

function useSimpleInput(initialValue = '') {
  const [inputValue, setInputValue] = useState(initialValue);

  const changeHandler = e => {
    setInputValue(e.target.value);
  };

  return {
    value: inputValue,
    changeHandler,
  };
}

export default useSimpleInput;
