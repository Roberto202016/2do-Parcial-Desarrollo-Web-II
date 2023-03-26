import { createContext, useReducer, useState } from "react";
import { EmployeeData } from "./imports/Employee";


import "./App.css";

interface State {
  isBlocked: boolean;
  values: EmployeeData;
  originalValues: EmployeeData;
}
interface Action {
  type: "BLOCK" | "UNBLOCK" | "UPDATE";
  payload?: Partial<EmployeeData>;
}

const initialState: State = {
  isBlocked: false,
  values: {
    name: "",
    phone: "",
    email: "",
    picture: "",
    birthdate: "",
    puesto: "",
  },
  originalValues: {
    name: "",
    phone: "",
    email: "",
    picture: "",
    birthdate: "",
    puesto: "",
  },
};

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "BLOCK":
      return { ...state, isBlocked: true, originalValues: {...state.values, ...action.payload
      }  };
    case "UNBLOCK":
      return { ...state, isBlocked: false,  values: { ...state.values, ...action.payload },
      originalValues: state.isBlocked
        ? state.originalValues
        : { ...state.values, ...action.payload },  };
        case "UPDATE":
          return { ...state, values: { ...state.values, ...action.payload },};
        default:
          return state;
  }
};

const App = () => {
 
};

export default App;
