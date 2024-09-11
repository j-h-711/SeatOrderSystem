import express from "express";
import connectToDatabase from "./db";
import menuRoutes from "./Routes/menuRoutes";
import orderRoutes from "./Routes/orderRoutes";

const app = express();
const port = 8000;

app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api/menus", menuRoutes);
app.use("/api/orders", orderRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
