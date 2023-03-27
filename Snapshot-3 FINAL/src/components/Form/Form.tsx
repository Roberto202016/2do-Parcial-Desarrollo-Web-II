import { EmployeeData, employeeInitialState } from "../../imports/Employee";
import { ChangeEventHandler } from "react";
import "./form.css";

interface Props {
  values: EmployeeData;
  errors: Partial<Record<keyof EmployeeData, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  validate: () => boolean;
  isBlocked: boolean;
}

export const EmployeeForm = ({
  values,
  errors,
  handleChange,
  handleChange2,
  validate,
  isBlocked,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      values.birthdate &&
      values.email &&
      values.name &&
      values.phone &&
      values.picture
    ) {
      if (validate()) {
        console.log("Submitting form", values);
      }
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          maxLength={10}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Picture:</label>
        <input
          type="text"
          name="picture"
          value={values.picture}
          onChange={handleChange}
        />
        {errors.picture && <span>{errors.picture}</span>}
      </div>
      <div>
        <label>Birthdate:</label>
        <input
          type="date"
          name="birthdate"
          value={values.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <span>{errors.birthdate}</span>}
      </div>
      <br />
      <div className="select-container">
        <label>Position:</label>
        <select
          name="puesto"
          value={values.puesto} // ...force the select's value to match the state variable...
          onChange={handleChange2} // ... and update the state variable on any change!
        >
          <option value="Gerente">Gerente</option>
          <option value="Desarrollador Jr">Desarrollador Jr</option>
          <option value="Desarrollador Sr">Desarrollador Sr</option>
          <option value="Soporte">Soporte</option>
        </select>
      </div>
    </form>
  );
};

export default EmployeeForm;
