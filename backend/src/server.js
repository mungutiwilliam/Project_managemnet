const express = require("express");
const app = express();
require('./db/mongoose')
const {PORT} = require('./config/index');
const agent = require("./routes/agent");
const admin = require("./routes/admin");
const tenant = require("./routes/tenant");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());
app.use("/agent",agent);
app.use("/admin", admin);
app.use("/tenant",tenant);



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(3001, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

