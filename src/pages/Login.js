import React, { useContext, useEffect } from 'react';
import { Input } from '../common';
import { AuthContext } from '../contexts';
import { useForm } from '../hooks';

const initialState = {
  input: {
    email: '',
    password: ''
  },
  error: {
    email: '',
    password: ''
  },
  isDisabled: true
};

const Login = () => {
  const {
    user,
    signInWithEmailPassword,
    signUpWithEmailPassword,
    signInWithGoogle,
    signInWithGithub,
    signOut
  } = useContext(AuthContext);

  const { state, dispatch, actionTypes, handleReset } = useForm(initialState);
  const { error, input, isDisabled } = state;

  useEffect(() => {
    if (error.email || error.password || !input.email || !input.password)
      dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: true } });
    else dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: false } });
  }, [
    error.email,
    error.password,
    input.email,
    input.password,
    actionTypes.DISABLED,
    dispatch
  ]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    dispatch({ type: actionTypes.ERROR, error: { field: name, message: '' } });

    if (name === 'email' && value.length === 0)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Email is required' }
      });
    if (name === 'password' && value.length === 0)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Password must at least 6 characters' }
      });

    dispatch({
      type: actionTypes.SUCCESS,
      payload: { field: name, value }
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (input.email.length <= 3)
      return dispatch({
        type: actionTypes.ERROR,
        error: { field: 'email', message: 'Invalid Email Address' }
      });
    if (input.password.length < 6)
      return dispatch({
        type: actionTypes.ERROR,
        error: { field: 'password', message: 'Password must at least 6 characters' }
      });
    signInWithEmailPassword(input.email, input.password);
    handleReset();
  };

  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit} autoComplete="off ">
        <Input
          label="Email: "
          type="email"
          name="email"
          error={error.email}
          value={input.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
        <Input
          label="Password: "
          type="password"
          name="password"
          error={error.password}
          value={input.password}
          onChange={handleInputChange}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
        />
        <button disabled={isDisabled}>Login</button>
      </form>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={signInWithGithub}>Sign In with Github</button>
      {user && (
        <>
          {user.email} <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </>
  );
};

export default Login;
