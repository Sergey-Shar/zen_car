export const createAction = (type, value) => {
  return {
    type: type,
    payload: value,
  };
};

export const actionToggle = {
  type: "SWITH_TOGGLE",
};

export const actionClearInput = {
  type: "CLEAR_ACTION",
};

export const logAut = {
  type: "LOG_AUT",
};
