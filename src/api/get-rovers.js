import axios from "axios";
import { BASE_URL } from "../constants.js";

export const getRovers = (req, res) => {
  axios
    .get(`${BASE_URL}?api_key=${process.env.API_KEY}`)
    .then(function (response) {
      // handle success
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      throw new Error("Failed to retrieve rovers data");
    });
};
