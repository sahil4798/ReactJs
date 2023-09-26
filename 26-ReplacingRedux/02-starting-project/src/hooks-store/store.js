import { useState, useEffect } from "react";

let globalState = {};
let listners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifer, payload) => {
    const newState = actions[actionIdentifer](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listner of listners) {
      listner(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen === true) {
      listners.push(setState);
    }

    return () => {
      if (shouldListen === true) {
        listners = listners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
