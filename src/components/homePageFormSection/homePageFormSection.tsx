import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadVariablesDescription } from "../../api";
import {
  chosenVINDescription,
  variablesDescription,
  VINMessage,
} from "../../redux/actions/state";
import { useNavigate } from "react-router-dom";
import "./homePageFormSection.css";

interface HomePageFormSectionProps {
  dispatchChosenVIN: any;
}

const HomePageFormSection: FC<HomePageFormSectionProps> = ({ dispatchChosenVIN }) => {
  const [vincode, setVincode] = useState("");
  const dispatch = useDispatch();

  const handleWord = (e: ChangeEvent<HTMLInputElement>) => {
    setVincode(e.target.value);
  };

  const navigate = useNavigate();

  const action = () => {
    navigate(`/variables`);
  };

  useEffect(() => {
    if (vincode.length === 0) {
      dispatch(chosenVINDescription([]));
      dispatch(VINMessage(""));
    }
  }, [vincode]);

  const dispatchVariablesDescription = async () => {
    const res: any = await loadVariablesDescription();
    dispatch(variablesDescription(res));
  };

  useEffect(() => {
    dispatchVariablesDescription();
  }, []);

  return (
    <section className="form-wrapper">
      <form
        className="form"
        onSubmit={(e: any) => dispatchChosenVIN(e, vincode)}
      >
        <input
          className="input"
          type="text"
          placeholder="YOUR VIN HERE"
          maxLength={17}
          minLength={17}
          onChange={handleWord}
          pattern={"^[a-zA-Z0-9]+$"}
        />
        <span className="input-helper">only numbers and english letters available</span>
      </form>
      <button className="button" onClick={action}>
        ALL VARIABLES
      </button>
    </section>
  );
};

export default HomePageFormSection;
