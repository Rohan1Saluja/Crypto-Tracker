import React from "react";
import { Text } from "../../UI/Text";
import "./Overview.scss";
import { getCoinTechnicals } from "../../../utils/api";

interface Props {
  coinID: string;
}

export const Overview: React.FC<Props> = ({ coinID }) => {
  const [technicalInfo, setTechnicalInfo] = React.useState<any>();
  const fetchCoinTechnicals = React.useCallback(async () => {
    await getCoinTechnicals(coinID)
      .then((resp) => {
        console.log("Coin info:", resp);
        setTechnicalInfo(resp);
      })
      .catch((error) => {
        console.log("Technical Info Error");
      });
  }, []);
  React.useEffect(() => {
    fetchCoinTechnicals();
  }, []);
  return (
    <div className="overview">
      <Text text={`About ${technicalInfo?.name}`} className="sub-heading" />
      <div className="categories">
        {technicalInfo?.categories?.map((category: string, index: number) => (
          <div className="category" key={index}>
            <Text text={category} className="description-small white" />
          </div>
        ))}
      </div>
      <div className="coin-description">
        <div className="question">
          <Text
            text={`What is ${technicalInfo?.name}?`}
            className="description-bold"
          />
        </div>
        <div className="description">
          {technicalInfo?.description.en
            .split("\n")
            .map((paragraph: string, index: number) => (
              <div className="paragraph" key={index}>
                <Text text={paragraph} className="description-mid" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
