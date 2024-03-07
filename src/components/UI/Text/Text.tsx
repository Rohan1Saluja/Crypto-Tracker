import React from "react";
import "./Text.scss";

interface Props {
  text: string;
  className?: string;
}

export const Text: React.FC<Props> = ({ text, className = "" }) => {
  return <div className={`text ${className}`}>{text}</div>;
};
