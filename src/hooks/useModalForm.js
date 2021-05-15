import { useEffect, useReducer } from 'react';

export const actionTypes = {
  DISABLED: 'Disabled',
  ERROR: 'Error',
  SUCCESS: 'Success',
  RESET: 'Reset'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DISABLED:
      return { ...state, isDisabled: action.payload.isDisabled };
    case actionTypes.ERROR:
      return {
        ...state,
        error: { ...state.error, [action.error.field]: action.error.message }
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        input: { ...state.input, [action.payload.field]: action.payload.value }
      };
    case actionTypes.RESET:
      return action.payload;
    default:
      return state;
  }
};

export const useModalForm = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.RESET, payload: initialState });
  }, [initialState]);

  const handleReset = () =>
    dispatch({ type: actionTypes.RESET, payload: initialState });

  return { state, dispatch, actionTypes, handleReset };
};
