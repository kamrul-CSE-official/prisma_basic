import { Request, Response } from "express";
import { categoryServices } from "./category.service";

const inserIntoDB = async (req: Request, res: Response) => {
  try {
    const result = categoryServices.insertIntoDB(req.body);

    res.send({
      succcess: true,
      message: "Category created!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const categoryController = {
  inserIntoDB,
};
