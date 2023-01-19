const initialState = {};

export default (state = initialState, { type, payload }) => {
  if (type === 'CLEAR_ERROR') {
    const { [payload]: temp, ...rest } = state;
    return rest;
  }

  const match = /(.*)_(REQUEST|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'FAIL') {
    return { ...state, [actionName]: payload || true };
  }

  const { [actionName]: temp, ...rest } = state;

  return rest;
};
