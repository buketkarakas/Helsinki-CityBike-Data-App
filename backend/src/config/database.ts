import { DataSourceOptions } from "typeorm";
import { Journey, Station } from "../models";

const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_USER),
    username: process.env.POSTGRES_USER ,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Journey, Station],
    synchronize: false,
};

export default config;