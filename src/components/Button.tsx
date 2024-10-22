import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
  <button className="btn btn-secondary">{label}</button>
);

export default Button;
