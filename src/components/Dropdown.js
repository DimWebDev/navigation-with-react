import React, { useState } from "react";

export const Dropdown = ({ options, selection, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select ... ";
  if (selection) {
    content = selection.label;
  }

  return (
    <>
      <div onClick={handleClick}>{content}</div>
      {showOptions && <div>{renderedOptions}</div>}
    </>
  );
};
