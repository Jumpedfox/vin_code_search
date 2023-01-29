import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { nanoid } from "nanoid";
import "./homePageLatestVINSection.css";

interface LatestVINSectionProps {
  dispatchChosenVIN: any;
}

const LatestVINSection: FC<LatestVINSectionProps> = ({ dispatchChosenVIN }) => {
  const latestVINs = useSelector((state: RootState) => state.state.latestVINs);

  return (
    <section className="latest-vin-wrapper">
      <span className="vin-list-name">Latest search results:</span>
      {latestVINs.length > 0 ?
      <ul className="vin-list">
        {latestVINs.map((el) => (
          <li className="vin-list-item" key={nanoid(5)} onClick={(e) => dispatchChosenVIN(e, el)}>
            {el}
          </li>
        ))}
      </ul>
      :
      <span className="vin-list-placeholder">History is empty!</span>
      
      }
    </section>
  );
};

export default LatestVINSection;
