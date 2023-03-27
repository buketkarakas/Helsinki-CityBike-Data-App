import express, {Application} from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { DataSource } from "typeorm";


import Router from "./routes";
import dbConfig from "./config/database";


const PORT = process.env.PORT || 8000;

const app: Application = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(Router);

const AppDataSource = new DataSource(dbConfig);


AppDataSource.initialize()
    .then((_connection) => {
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    });

export {AppDataSource};