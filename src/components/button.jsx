// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-3 bg-coral text-white rounded-lg hover:bg-coral-dark transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
