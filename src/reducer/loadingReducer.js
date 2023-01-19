const initialState = {};

export default (state = initialState, { type, payload }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'REQUEST') {
    return { ...state, [actionName]: payload || true };
  }

  const { [actionName]: temp, ...rest } = state;

  return rest;
};
