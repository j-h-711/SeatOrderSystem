import { Request, Response } from "express";
import Order from "../Models/orderModel";
import Menu from "../Models/menuModel";

// 주문 생성
export const placeOrder = async (req: Request, res: Response) => {
  const { tableNumber, items } = req.body;

  // 유효성 검사
  if (!tableNumber || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  try {
    // 주문 생성
    const newOrder = new Order({ tableNumber, items });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};
