const logger = store => next => action => {
  const match = /(.*)_(FAIL)/.exec(action.type);

  if (match) {
    // server call
    console.log('something failed...');
  }

  next(action);
};

export default logger;
