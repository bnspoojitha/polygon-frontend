"use strict";

import { createContext, useContext } from "react";

import { init_state_global } from "../reducers/globalReducer";

export const globalContext = createContext({
  state: init_state_global,
  dispatch: () => {},
});

export const useGlobalContext = () => useContext(globalContext);

