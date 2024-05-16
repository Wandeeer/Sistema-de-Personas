import express from "express";
import { formulario, registro, tabla } from "../controllers/users.js";
const router = express.Router();

router.get("/tabla", tabla);
router.post("/registro", registro);
router.get("/registro", formulario);

export default router;
