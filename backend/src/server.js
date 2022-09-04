const express = require("express");
const app = express();
require('./db/mongoose')
const {PORT} = require('./config/index');
const adm_agent_routes = require("./routes/admin_agent_routes/adm_agent_routes");
const superadmin = require("./routes/admin_agent_routes/admin_routes");
const all_users = require("./routes/all_users_routes/routes");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin",adm_agent_routes);
app.use("/superadmin",superadmin);
app.use("/user",all_users);



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!"});
  });

  
app.listen(3001, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

