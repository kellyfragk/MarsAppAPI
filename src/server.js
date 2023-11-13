import express from "express";
import * as dotenv from "dotenv";
import { getRovers } from "./api/get-rovers.js";
import { getPhotos } from "./api/get-photos.js";

const app = express();
const port = 8000;

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.json());
const router = express.Router();

router.get("/rovers", getRovers);
router.get("/rovers/:roverName/photos/:cameraType", getPhotos);
app.use("/", router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
