const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

