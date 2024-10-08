import express from "express";
import connectToDatabase from "./db";
import cors from "cors";
import menuRoutes from "./Routes/menuRoutes";
import orderRoutes from "./Routes/orderRoutes";
import { Server, Socket } from "socket.io";

const app = express();
const port = process.env.REACT_APP_PORT || 8000;
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

app.use(express.json());

connectToDatabase();

// io.on("connection", (socket) => {
//   console.log("a user connected");

//   socket.on("chat message", (msg) => {
//     // 모든 클라이언트에게 메시지를 전송
//     io.emit("chat message", msg);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api/menus", menuRoutes);
app.use("/api/orders", orderRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
