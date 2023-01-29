import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { VariableData } from "../../types/types";
import "./chosenVariablePage.css"

const CholsenVariablePage: FC = () => {
  const variables = useSelector(
    (state: RootState) => state.state.variablesDescription
  );
  const variableID = useSelector(
    (state: RootState) => state.state.chosenVariableID
  );

  const chosenVariableDescription = (value: number) => {
    const result = variables.find((el: VariableData) => el.ID === value);
    return result?.Description.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <section className="chosen-variable-page">
      <span >{chosenVariableDescription(variableID)}</span>
    </section>
  );
};

export default CholsenVariablePage;
