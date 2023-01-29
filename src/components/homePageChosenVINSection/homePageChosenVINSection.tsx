import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./homePageChosenVINSection.css";

const HomePageChosenVINSection: FC = () => {
  const chosenVIN: any[] = useSelector(
    (state: RootState) => state.state.chosenVIN
  );
  const VINMessage: string = useSelector(
    (state: RootState) => state.state.VINMessage
  );

  return (
    <section className="vin-wrapper">
      {VINMessage.length > 0 && (
        <span className="vin-result-message">{VINMessage}</span>
      )}
      <ul className="vin-variables-list"> 
        {chosenVIN.map((el) => {
          if (el.Value !== null && el.Value.length > 0) {
            return (
              <li className="vin-variables-list-item" key={el.VariableId}>{el.Variable + " : " + el.Value}</li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default HomePageChosenVINSection;
