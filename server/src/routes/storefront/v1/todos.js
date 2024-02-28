import express from "express";
import fs from "fs";
import path from "path";

const TodosRoutes = express.Router();

TodosRoutes.get("/", (req, res) => {
	return res.status(200).json(
		JSON.parse(
			fs.readFileSync(path.join(process.cwd(), "/src/models/data.json"), {
				encoding: "utf-8",
			})
		)
	);
});

export default TodosRoutes;
