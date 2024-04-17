import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modeules/users/user.route";
import { categoryRoutes } from "./modeules/category/category.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/category", categoryRoutes);

export default app;
