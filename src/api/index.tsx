import axios from "axios";

const url = "https://vpic.nhtsa.dot.gov/api/vehicles/";

export const loadChosenVIN = async (vincode: string) => {
  const res = await axios.get(`${url}decodevin/${vincode}?format=json`);
  return res.data;
};

export const loadVariablesDescription = async () => {
  const res = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
  );
  return res.data.Results;
};
