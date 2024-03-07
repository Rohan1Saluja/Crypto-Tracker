import { Text } from "../../UI/Text";
import "./Overview.scss";

export const Overview: React.FC = () => {
  return (
    <div className="overview">
      <Text text="Performance" className="description-bold" />
    </div>
  );
};
