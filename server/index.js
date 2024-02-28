import express from "express";
import dotenv from "dotenv";
import path from "path";
import storefrontRoute from "./src/routes/storefront/index.js";

dotenv.config(path.join(path.resolve(process.cwd(), "../"), ".env"));

const app = express();

//#region [routes]
app.use("/storefront", storefrontRoute);
//#endregion

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});
