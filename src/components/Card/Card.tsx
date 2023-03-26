import { EmployeeData } from "../../imports/Employee";
import { useContext } from "react";
import { AppContext } from "../../App";
import './card.css';
interface Props {
  values: EmployeeData;
  isBlocked: boolean;
  originalValues: EmployeeData;
}

export const EmployeeCard = ({ isBlocked }: Props) => {
  const { state } = useContext(AppContext);
  const values = isBlocked ? state.originalValues : state.values;
  //{console.log(state.values)}
  {console.log(state.originalValues)}
  return (
    <div className="employee-card">
      <fieldset disabled={isBlocked}>
        <div>
          <img src={values.picture} alt="Employee" />
        </div>
        <div>
          <label>Name:</label>
          <span>{values.name}</span>
        </div>
        <div>
          <label>Phone:</label>
          <span>{values.phone}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{values.email}</span>
        </div>
        <div>
          <label>Birthdate:</label>
          <span>{values.birthdate}</span>
        </div>
        <div>
          <label>Select:</label>
          <span>{values.puesto}</span>
        </div>
      </fieldset>
    </div>
  );
};


export default EmployeeCard;
    
    