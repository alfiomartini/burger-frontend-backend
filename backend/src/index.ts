import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ingredientRoutes from "./routes/ingredients";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());

app.use(bodyParser.json());

app.use("/ingredient", ingredientRoutes);

if (process.env.NODE_ENV === "docker") {
  console.log("docker environment");
}

app.get("/", (req: Request, res: Response) => res.send("Welcome to the Burger Grill API"));
app.all("*", (req: Request, res: Response) =>
  res.send("You have tried reaching a route that does not exist"),
);

app.listen(PORT, () =>
  console.log(`Node/express server running on port: http://localhost:${PORT}`),
);
