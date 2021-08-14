import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } });
    //    setAlert({ msg, type });
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    // setTimeout(() => this.setState({ alert: null }), 5000);
    //    setTimeout(() => setAlert(null), 5000);
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
