export const authInitialState = {
  loading: false,
  error: null,
  user: null,
};

export default (state = authInitialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_REQUEST':
      return { ...state, loading: true };

    case 'AUTH_SUCCESS':
      return { ...state, loading: false, user: payload };

    case 'AUTH_FAIL':
      return { ...state, loading: false, error: payload };

    case 'AUTH_CLEAR':
      return authInitialState;

    default:
      return state;
  }
};
