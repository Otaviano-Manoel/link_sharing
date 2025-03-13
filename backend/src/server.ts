import express, { Request, Response } from "express";
import useRoutes from "./routes/userRoutes";
import profileRoutes from "./routes/profileRoutes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(useRoutes);
app.use(profileRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
