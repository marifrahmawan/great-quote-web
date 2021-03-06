import { useEffect, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Validator from '../tools/validator';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const {
    value: author,
    inputChangeHandler: authorInputHandler,
    inputClickHandler: authorInputClicked,
    inputIsValid: authorInputIsValid,
    hasError: authorInputHasError,
    reset: authorInputReset,
  } = useInput(Validator.onlyLetters);

  const {
    value: text,
    inputChangeHandler: textInputHandler,
    inputClickHandler: textClickHandler,
    inputIsValid: textInputIsValid,
    hasError: textInputHasError,
    reset: textInputReset,
  } = useInput(Validator.containsAlphaNumeric);

  const setProperFocus = () => {
    if (!authorInputIsValid) {
      authorInputRef.current.focus();
    } else if (!textInputIsValid) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (textInputIsValid && authorInputIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [textInputIsValid, authorInputIsValid]);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (!formIsValid) {
      setProperFocus();
      return;
    }

    console.log('okay you past');

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    authorInputReset();
    textInputReset();
  }
  const finishWorking = () => {
    setIsEntering(false);
  };
  const startWorking = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) => {
          return 'Are you sure you wannt to leave? All your entered data will be lost!';
        }}
      />
      <Card>
        <form
          onChange={startWorking}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              ref={authorInputRef}
              autoComplete="off"
              onChange={authorInputHandler}
              onBlur={authorInputClicked}
              value={author}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              ref={textInputRef}
              onChange={textInputHandler}
              onBlur={textClickHandler}
              value={text}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishWorking}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
