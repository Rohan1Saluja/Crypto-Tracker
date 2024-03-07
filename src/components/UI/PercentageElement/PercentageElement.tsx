import React from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Text } from "../Text";

interface Props {
  className?: string;
  roundedPercentage: number;
}

export const PercentageElement: React.FC<Props> = ({
  className = "",
  roundedPercentage,
}) => {
  return (
    <div className={``}>
      <div
        className={`price-percentage ${className} ${
          roundedPercentage != null && roundedPercentage >= 0
            ? "positive"
            : "negative"
        }`}
      >
        {roundedPercentage != null && roundedPercentage > 0 ? (
          <ArrowDropUp className="arrow-up" />
        ) : (
          <ArrowDropDown className="arrow-down" />
        )}
        <Text
          text={`${roundedPercentage != null ? roundedPercentage : "-"}%`}
          className={`description-small text-element ${
            roundedPercentage != null &&
            roundedPercentage < 0 &&
            "negative-text"
          }`}
        />
      </div>
    </div>
  );
};
