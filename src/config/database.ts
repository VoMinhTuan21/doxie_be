import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const baseDir = process.env.NODE_ENV == "production" ? "dist/src" : "src";

export const myDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "08012001",
	database: "doxie",
	entities: [baseDir + "/entity/**/*entity.{ts,js}"],
	logging: false,
	synchronize: true,
	namingStrategy: new SnakeNamingStrategy(),
});
