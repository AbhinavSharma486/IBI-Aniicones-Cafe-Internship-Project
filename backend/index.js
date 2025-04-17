import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// user auth routes
app.use("/api/auth", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
