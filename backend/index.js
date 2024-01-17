const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Orgin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Header",
    "Orgin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/Createuser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.get("/", (req, res) => {
  res.send("Helo world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
