import React from "react";

export const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  let className = "px-3 py-1.5 border flex items-center" ;

  if (primary) {
    className += " border-blue-600 bg-blue-500 text-white";
  } else if (secondary) {
    className += " border-gray-900 bg-gray-900 text-white";
  } else if (success) {
    className += " border-green-600 bg-green-500 text-white";
  } else if (warning) {
    className += " border-yellow-600 bg-yellow-500 text-black";
  } else if (danger) {
    className += " border-red-600 bg-red-500 text-white";
  }

  if (rounded) {
    className += " rounded-full";
  }

  if (outline) {
    className += " border border-gray-600 bg-white text-black";
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
