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

// 특정 메뉴 조회
export const getMenuById = async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const menu = await Menu.findById(id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving menu", error });
  }
};
