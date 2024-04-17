import exporss from "express";
import { postController } from "./post.controller";

const router = exporss.Router();

router.get("/", postController.getAllPostController);
router.post("/create-post", postController.createPostController);
router.get("/:id", postController.getSinglePostController);

export const postRoutes = router;
