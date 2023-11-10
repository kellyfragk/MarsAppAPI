import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

const app = express();
const port = 8000;

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.json());
const router = express.Router();
router.get("/test", (req, res) => res.send("Hello world !"));
router.get("/rovers", (req, res) => {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${process.env.API_KEY}`,
    )
    .then(function (response) {
      // handle success
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});
router.get("/rovers/:roverName/photos/:cameraType", (req, res) => {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${req.params.roverName}/photos?sol=1000&camera=${req.params.cameraType}&api_key=${process.env.API_KEY}`,
    )
    .then(function (response) {
      // handle success
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});
app.use("/", router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
