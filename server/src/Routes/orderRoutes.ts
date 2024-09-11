import express from "express";
import { placeOrder } from "../Controllers/orderController";

const router = express.Router();

router.post("/", placeOrder);

export default router;
