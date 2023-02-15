import React from "react";
import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];

export const App = () => {
const [selection, setSelection] = useState(null)

const handleSelect = (option) => {
  setSelection(option)
}

  return (
    <>
      <Dropdown options={options} selection={selection} onSelect={handleSelect} />
    </>
  );
};
