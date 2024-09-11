import { Request, Response } from "express";
import Menu from "../Models/menuModel";

// 전체 메뉴 조회
export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving menus", error });
  }
};
