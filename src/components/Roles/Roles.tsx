import { useState } from "react";
import React from 'react';

function PositionPicker() {
    const [selectedPosition, setSelectedPosition] = useState('Gerente'); // Declare a state variable...

    return (
      <>
      <select
        value={selectedPosition} // ...force the select's value to match the state variable...
        onChange={e => setSelectedPosition(e.target.value)} // ... and update the state variable on any change!
      >
        <option value="Gerente">Apple</option>
        <option value="Desarrollador Jr">Banana</option>
        <option value="Desarrollador Sr">Orange</option>
        <option value="Soporte">Soporte</option>
      </select>
    </>
    );
}

export default PositionPicker;