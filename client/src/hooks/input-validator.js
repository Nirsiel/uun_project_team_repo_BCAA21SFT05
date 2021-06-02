import {useState} from 'react';

const inputValidator = (validatorFunction) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isTouched, setIsTouchet] = useState(false);

  const valueIsValid = validatorFunction(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouchet(true);
  }

  return{
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler
  };
}

export default inputValidator;
