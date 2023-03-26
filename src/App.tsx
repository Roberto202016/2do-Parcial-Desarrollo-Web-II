import { createContext, useReducer, useState } from "react";
import { EmployeeCard } from "./components/Card/Card";
import { EmployeeData } from "./imports/Employee";
import { EmployeeForm } from "./components/Form/Form";
import { useButtonValidation } from "./hooks/useButtonValidation";
import { useFormValidation } from "./hooks/useFormValidation";
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isBlocked, values, originalValues } = state;

  const formErrors = useFormValidation(values);
  const buttonStates = useButtonValidation(isBlocked, values);

  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE", payload: { [name]: value } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE", payload: { [name]: value } });
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="background">
        <div className="titulo">Employee Card</div>
        <h2 className={isBlocked ? "aviso blocked" : "aviso"}>
          {isBlocked ? "BLOCKED - THE CARD CANT BE MODIFIED" : "UNBLOCKED"}
        </h2>
        <h1 className="verificacion">
          {!values.name ||
          !values.email ||
          !values.phone ||
          !values.picture ||
          !values.birthdate
            ? "Faltan datos"
            : null}
        </h1>
        <EmployeeCard values={values} isBlocked={isBlocked} originalValues={originalValues}  />
        <EmployeeForm
          handleChange={handleChange}
          handleChange2 = {handleChange2}
          validate={() => true}
          values={values}
          errors={formErrors}
          isBlocked={isBlocked}
        />
        <button
          className="block"
          onClick={() => dispatch({ type: "BLOCK" })}
          disabled={buttonStates.isBlockButtonDisabled}
        >
          block
        </button>
        <button
  className="unblock"
  onClick={() =>
    dispatch({ type: "UNBLOCK", payload: state.originalValues && state.values })
  }
  disabled={buttonStates.isUnlockButtonDisabled}
>
  Unlock
</button>
      </div>
    </AppContext.Provider>
  );
};

export default App;
