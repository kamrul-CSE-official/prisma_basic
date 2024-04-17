import exporess from "express";
import { categoryController } from "./category.controller";

const router = exporess.Router();

router.post("/create-category", categoryController.inserIntoDB);

export const categoryRoutes = router;
