import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { myDataSource } from "./config/database";
import { RegisterRoutes } from "./routes";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { errorHandler } from "./util/error-handler";
import { notFoundHandler } from "./util/not-found-handler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());

myDataSource
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
	});

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
	return res.send(swaggerUi.generateHTML(await import("./swagger.json")));
});

RegisterRoutes(app);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
