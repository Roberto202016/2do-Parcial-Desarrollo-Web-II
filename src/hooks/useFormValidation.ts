import { EmployeeData } from "../imports/Employee";

type ErrorMessages<T> = Partial<Record<keyof T, string>>;

export const useFormValidation = (values: EmployeeData): ErrorMessages<EmployeeData> => {
  const errors: ErrorMessages<EmployeeData> = {};


  const phoneRegex = /^\d{10}$/;


  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }


  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.picture) {
    errors.picture = "Picture is required";
  }

  if (!values.birthdate) {
    errors.birthdate = "Birthdate is required";
  }

  if (!values.puesto) {
    errors.puesto = "Position is required";
  }


  return errors;
};

export default useFormValidation;