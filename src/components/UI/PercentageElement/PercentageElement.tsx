import React from "react";
import "./Text.scss";

interface Props {
  price: string;
  className?: string;
}

export const PercentageElement: React.FC<Props> = ({
  price,
  className = "",
}) => {
  return <div className={`text ${className}`}>{price}</div>;
};
