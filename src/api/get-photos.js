import axios from "axios";
import { BASE_URL } from "../constants.js";

export const getPhotos = (req, res) => {
  axios
    .get(
      `${BASE_URL}${req.params.roverName}/photos?sol=1000&camera=${req.params.cameraType}&api_key=${process.env.API_KEY}`,
    )
    .then(function (response) {
      // handle success
      let photosData = {};

      photosData.photos = response.data.photos.map(
        ({ id, sol, img_src, earth_date }) => {
          return {
            id: id,
            sol: sol,
            img_src: img_src,
            earth_date: earth_date,
          };
        },
      );

      res.send(photosData);
    })
    .catch(function (error) {
      // handle error
      throw new Error("Failed to retrieve photos data");
    });
};
