import express from "express";
import v1Routes from "./routes/v1";

const app = express();
const port = 3000;

app.use("/api/v1", v1Routes);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
