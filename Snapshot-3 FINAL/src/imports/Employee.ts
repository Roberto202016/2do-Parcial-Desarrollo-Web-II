import { ChangeEventHandler, createContext } from "react";

export interface EmployeeData {
    name: string;
    phone: string;
    email: string;
    picture: string;
    birthdate: string;
    puesto: string;
  
  }

  export const employeeInitialState: EmployeeData = {
    name: '',
    phone: '',
    email: '',
    picture: '',
    birthdate: '',
    puesto: '',
  }

  export interface EmployeeContextData {
    handleChange: ChangeEventHandler<HTMLInputElement> | null,
    data: EmployeeData,
  }

  
  const contextData: EmployeeContextData = {
    data: employeeInitialState,
    handleChange: null,
  }
  
  export const EmployeeContext = createContext<EmployeeContextData>(contextData);