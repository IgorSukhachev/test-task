import axios from "axios";

export const fetchCatImage = async (): Promise<string> => {
  const { data } = await axios.get("https://api.thecatapi.com/v1/images/search");
  return data[0]?.url;
};
