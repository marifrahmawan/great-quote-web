import { useReducer } from 'react';

const useInput = (validationRule) => {
  const inputInitialState = {
    value: '',
    isClicked: false,
  };

  const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
      return { value: action.value, isClicked: state.isClicked };
    }

    if (action.type === 'CLICK') {
      return { value: state.value, isClicked: true };
    }

    if (action.type === 'RESET') {
      return { value: '' };
    }

    return inputStateReducer;
  };

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    inputInitialState
  );

  const inputChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputClickHandler = (e) => {
    dispatch({ type: 'CLICK' });
  };

  const reset = (e) => {
    dispatch({ type: 'RESET' });
  };

  const inputIsValid = validationRule.test(inputState.value);
  const hasError = !inputIsValid && inputState.isClicked;

  return {
    value: inputState.value,
    inputChangeHandler,
    inputClickHandler,
    inputIsValid,
    hasError,
    reset,
  };
};

export default useInput;
