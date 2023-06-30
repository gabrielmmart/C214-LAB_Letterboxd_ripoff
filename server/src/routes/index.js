import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import reviewRoute from "./review.route.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);

export default router;