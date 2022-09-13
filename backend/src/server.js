const express = require("express");
const app = express();
require('./db/mongoose')
const {PORT} = require('./config/index');
const agent_routes = require("./routes/admin_agent_routes/common_routes");
const superadmin = require("./routes/admin_agent_routes/admin_routes");
const tenant = require("./routes/tenant_routes/tenant_routes");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/superadmin",superadmin);
app.use("/agent",agent_routes);
app.use("/tenant",tenant);



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!"});
  });

  
app.listen(3001, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

