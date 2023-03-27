import { Console } from "console";
import { EmployeeData } from "../imports/Employee";

export interface ButtonState {
  isBlockButtonDisabled: boolean;
  isUnlockButtonDisabled: boolean;
}

export const useButtonValidation = (isBlocked: boolean, values: EmployeeData): ButtonState => {
  const isBlockButtonDisabled = isBlocked || Object.values(values).some((val) => !val);
  const isUnlockButtonDisabled = !isBlocked || Object.values(values).some((val) => !val);

  return { isBlockButtonDisabled, isUnlockButtonDisabled };
};