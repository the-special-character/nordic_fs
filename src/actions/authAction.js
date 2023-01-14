export const login = (values, actions) => async dispatch => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }
    localStorage.setItem('token', JSON.stringify(json));
    dispatch({ type: 'AUTH_SUCCESS', payload: json });
    actions.resetForm();
  } catch (error) {
    actions.setErrors({
      serverError: error.message,
    });
    dispatch({ type: 'AUTH_FAIL', payload: error });
  }
};

export const register = async (values, actions) => async dispatch => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    const { confirmPassword, ...rest } = values;
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify(rest),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }
    localStorage.setItem('token', JSON.stringify(json));
    dispatch({ type: 'AUTH_SUCCESS', payload: json });
    actions.resetForm();
  } catch (error) {
    actions.setErrors({
      serverError: error.message,
    });
    dispatch({ type: 'AUTH_FAIL', payload: error });
  }
};

export const logout = () => async dispatch => {
  localStorage.clear();
  dispatch({ type: 'AUTH_CLEAR' });
};
