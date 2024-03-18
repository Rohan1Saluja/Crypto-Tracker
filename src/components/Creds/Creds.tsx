import { Text } from "../UI/Text";
import "./Creds.scss";

export const Creds: React.FC = () => {
  return (
    <div className="creds-element">
      <div className="credits">
        <Text text="Rohan Saluja" className="description" />
      </div>
      <div className="socials">
        <Text text="rohansaluja1101@gmail.com" className="description-small" />
      </div>
    </div>
  );
};
