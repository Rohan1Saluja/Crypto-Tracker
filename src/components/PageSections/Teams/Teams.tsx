import { Text } from "../../UI/Text";
import "./Teams.scss";

export const Teams: React.FC = () => {
  return (
    <div className="teams">
      <div className="header">
        <Text text="Teams" className="sub-heading" />
        <div className="intro">
          <Text
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas commodi pariatur, est voluptates eum, quia natus aut autem dolorem eaque laborum ratione optio. 
            Magnam animi unde aut, quasi laboriosam mollitia."
            className="description-mid shorter-line-height"
          />
        </div>
      </div>
    </div>
  );
};
