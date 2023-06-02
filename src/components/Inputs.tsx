import React from "react";

const Input = ({ label, value, className }:{
    label?: string
    value?: any
    className?: string
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-lg font-medium text-dark-text">{label}</label>}
      <input
        className={`rounded-md py-2 px-3 text-sm focus:ring-2 bg-darkBack w-full text-dark-text focus:outline-none ${className ? className : ""}`}
        value={value}
      />
    </div>
  );
};

export default Input;
