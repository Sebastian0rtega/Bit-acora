import { resolve } from "node:path";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: resolve(__dirname, "../../../.env") });

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
    throw new Error("DB_NAME, DB_USER, and DB_PASSWORD must be set in .env");
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 5432),
    dialect: "postgres",
    logging: false
});

export default sequelize;