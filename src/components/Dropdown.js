import React, { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";

export const Dropdown = ({ options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    onChange(option);
  };

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounder cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  let content = value?.label || "Select...";

  return (
    <div ref={ref} className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className="text-xl" />
      </div>
      {showOptions && (
        <div className="absolute top-full  border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};
