import express from "express";
import { getMenus, getMenuById } from "../Controllers/menuController";

const router = express.Router();

router.get("/", getMenus);
router.get("/:id", getMenuById);

export default router;
