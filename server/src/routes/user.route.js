import express from "express"
import {body} from "express-validator"
import favoriteController from "../controllers/favorite.controller.js"
import userController from "../controllers/user.controller.js"
import requestHandler from "../handlers/request.handler.js"
import userModel from "../models/user.model.js"
import tokenMiddleware from "../middlewares/token.middleware.js"

const router = express.Router()

router.post(
    "/signup",
    body("usuario")
    .exists().withMessage("requer usuario")
    .isLength({ min: 8}).withMessage("Usuario minimo 8 caracteres")
    .custom(async value => {
        const user = await userModel.findOne({ username: value });
        if (user) return Promise.reject("Nome de usuario ja usado");
    }),
    body("senha")
    .exists().withMessage("requer senha")
    .isLength({ min: 8 }).withMessage("senha minimo 8 caracteres"),
    body("confirmarSenha")
    .exists().withMessage("requer confimarSenha")
    .isLength({ min: 8}).withMessage("confirmarSenha minimo 8 caracteres")
    .custom((value, {req}) => {
        if(value !== req.body.password) throw new Error("a senha nao corresponde")
        return true
    }),
    body("nomeDeExibicao")
    .exists().withMessage("requer nomeDeExibicao")
    .isLength({ min: 8 }).withMessage("nomeDeExibicao minimo 8 caracteres"),
    requestHandler.validate,
    userController.signup
);

router.post(
    "/signin",
    body("usuario")
    .exists().withMessage("requer usuario")
    .isLength({ min: 8}).withMessage("usuario minimo 8 caracteres"),
    body("senha")
    .exists().withMessage("requer senha")
    .isLength({ min: 8}).withMessage("senha minimo 8 caracteres"),
    requestHandler.validate,
    userController.signin

);

router.put(
    "/update-password",
    tokenMiddleware.auth,
    body("username")
    .exists().withMessage("requer senha")
    .isLength({ min: 8}).withMessage("senha no minimo 8 caracteres"),
    body("novaSenha")
    .exists().withMessage("requer novaSenha")
    .isLength({ min: 8}).withMessage("novaSenha no minimo 8 caracteres"),
    body("confirmarNovaSenha")
    .exists().withMessage("requer confirmarNovaSenha")
    .isLength({ min: 8}).withMessage("confirmarNovaSenha no minimo 8 caracteres")
    .custom((value, {req}) => {
        if(value !== req.body.newPassword) throw new Error("a senha nao corresponde")
        return true
    }),
    requestHandler.validate,
    userController.updatePassword   
);

router.get(
    "/info",
    tokenMiddleware.auth,
    userController.getInfo
);

router.get(
    "/favorites",
    tokenMiddleware.auth,
    favoriteController.getFavoritesOfUser
);

router.post(
    "/favorites",
    tokenMiddleware.auth,
    body("mediaType")
    .exists().withMessage("requer mediaType")
    .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalido"),
    body("mediaId")
    .exists().withMessage("requer mediaId")
    .isLength({ min: 1 }).withMessage("mediaId nao pode estar vazio"),
    body("mediaTitle")
    .exists().withMessage("requer mediaTitle"),
    body("mediaPoster")
    .exists().withMessage("requer mediaPoster"),
    body("mediaRate")
    .exists().withMessage("requer mediaRate"),
    requestHandler.validate,
    favoriteController.addFavorite
)

router.delete(
    "/favorite/:favoriteId",
    tokenMiddleware.auth,
    favoriteController.removeFavorite
);

export default router;