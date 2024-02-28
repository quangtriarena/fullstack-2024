import express from "express";
import TodosRoutes from "./v1/todos.js";

const router = express.Router();

router.use("/v1/todos", TodosRoutes);

export default router;
