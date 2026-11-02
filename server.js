import express from "express";
import cors from "cors";
import flightRoutes from "./flightRoutes.js";
import authRoutes from "./authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRoutes);
app.use("/api", flightRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Flight Booking Server running at http://localhost:${PORT}`);
});