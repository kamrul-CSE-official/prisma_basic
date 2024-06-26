import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
