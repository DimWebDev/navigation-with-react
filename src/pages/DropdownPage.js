import React from "react";
import { useState } from "react";
import { Dropdown } from "../components/Dropdown";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];

export const DropdownPage = () => {
  const [selection, setSelection] = useState(null);
  const [selection2, setSelection2] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const handleSelect2 = (option) => {
    setSelection2(option);
  };

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection2} onChange={handleSelect2} />
    </div>
  );
};
