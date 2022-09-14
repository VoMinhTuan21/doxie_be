import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const baseDir = process.env.NODE_ENV == "production" ? "dist/src" : "src";
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +(process.env.DATABASE_PORT as string),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [baseDir + "/entity/**/*entity.{ts,js}"],
  logging: false,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});
