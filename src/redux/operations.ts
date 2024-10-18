// https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
  );

  return response.data;
};
