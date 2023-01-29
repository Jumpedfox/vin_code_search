import { nanoid } from "nanoid";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { useNavigate } from "react-router-dom";
import { chosenVariableDescription } from "../../redux/actions/state";
import { VariableData } from "../../types/types";
import "./variablesPage.css"

const VariablesPage: FC = () => {
  const variablesDesc = useSelector(
    (state: RootState) => state.state.variablesDescription
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const action = (id: number) => {
    dispatch(chosenVariableDescription(id));
    navigate(`/variables/${id}`);
  };

  return (
    <section className="variables-page">
      <ul className="variables-page-list">
        {variablesDesc.map((item: VariableData) => (
          <li className="variables-page-list-item" onClick={() => action(item.ID)} key={nanoid(7)}>
            {item.Name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VariablesPage;
