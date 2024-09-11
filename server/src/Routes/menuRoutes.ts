import express from "express";
import { getMenus } from "../Controllers/menuController";

const router = express.Router();

router.get("/", getMenus);

export default router;
