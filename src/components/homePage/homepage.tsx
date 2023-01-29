import { FC } from "react";
import { loadChosenVIN } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  chosenVINDescription,
  LatestVINs,
  VINMessage,
} from "../../redux/actions/state";
import { RootState } from "../../redux/rootReducer";
import HomePageForm from "../homePageFormSection/homePageFormSection";
import LatestVINSection from "../homePageLatestVINSection/homePageLatestVINSection";
import HomePageChosenVINSection from "../homePageChosenVINSection/homePageChosenVINSection";
import "./homePage.css";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const chosenVIN = useSelector((state: RootState) => state.state.chosenVIN);

  const dispatchChosenVIN = async (e: any, vincode: string) => {
    e.preventDefault();
    const res: any = await loadChosenVIN(vincode);
    if (res) {
      dispatch(chosenVINDescription(res.Results));
      dispatch(VINMessage(res.Message));
      dispatch(LatestVINs(vincode));
    }
  };

  return (
    <section className="homepage">
      <HomePageForm dispatchChosenVIN={dispatchChosenVIN} />
      <LatestVINSection dispatchChosenVIN={dispatchChosenVIN} />
      {chosenVIN.length > 0 && <HomePageChosenVINSection />}
    </section>
  );
};

export default HomePage;
