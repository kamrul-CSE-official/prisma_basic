import { Request, Response } from "express";
import { postSerives } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await postSerives.createPost(req.body);

    res.send({
      success: true,
      message: "Post created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPostController = async (req: Request, res: Response) => {
  try {
    const result = await postSerives.getAllPost();

    res.send({
      success: true,
      message: "Post fetch successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePostController = async (req: Request, res: Response) => {
  try {
    const result = await postSerives.getSinglePost(parseInt(req.params.id));

    res.send({
      success: true,
      message: "Post fetch successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  createPostController,
  getAllPostController,
  getSinglePostController,
};
