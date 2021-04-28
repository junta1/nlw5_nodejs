import express, { response } from "express";
import "./database";
import {routes} from "./routes";

const app = express();

app.use(express.json());//habilitando o uso de json no body

app.use(routes);

app.listen(3333, () => console.log("Seerver is running on port 3333"));