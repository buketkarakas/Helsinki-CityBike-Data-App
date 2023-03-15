import { DataSourceOptions } from "typeorm";
import { Journey, Station } from "../models";

const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_USER) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [Journey, Station],
    synchronize: false,
};

export default config;