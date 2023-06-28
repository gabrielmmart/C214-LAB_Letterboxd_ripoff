import express from "express"
import {body} from "express-validator"
import reviewController from "../controllers/review.controller.js"
import tokenMiddleware from "../middlewares/token.middleware.js"
import requestHandler from "../handlers/request.handler.js"

const router = express.Router({ mergeParams: true })

router.get(
    "/",
    tokenMiddleware.auth,
    reviewController.getReviewsOfUser
)

router.post(
    "/",
    tokenMiddleware.auth,
    body("mediaId")
    .exists().withMessage("requer mediaId")
    .isLength({ min: 1}).withMessage("mediaId nao pode estar vazio"),
    body("content")
    .exists().withMessage("requer content")
    .isLength({ min: 1}).withMessage("content nao pode estar vazio"),
    body("mediaType")
    .exists().withMessage("requer mediaType")
    .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalido"),
    body("mediaTitle")
    .exists().withMessage("requer mediaTitle"),
    body("mediaPoster")
    .exists().withMessage("requer mediaPoster"),
    requestHandler.validate,
    reviewController.create
);

router.delete(
    "/:reviewId",
    tokenMiddleware.auth,
    reviewController.remove
);

export default router;