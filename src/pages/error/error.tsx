import React from "react";
import "./error.scss";
import { Text } from "../../components/UI/Text";
import ErrorIcon from "@mui/icons-material/Error";

interface Props {
  displayMessage?: string;
}

export const Error: React.FC<Props> = ({ displayMessage }) => {
  return (
    <div className="error-container">
      <div className="error-info">
        <ErrorIcon />
        <Text text="Something went wrong" className="sub-heading" />
      </div>
      {displayMessage ? (
        <Text text={displayMessage} className="description-small" />
      ) : (
        <div className="error-description">
          <Text text="Please reload the page or try again after some time." />
        </div>
      )}
    </div>
  );
};
