// lib and imports
const express = require("express");
const app = express();

const CarsController = require("./controllers/controller")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
  res.render('home.ejs');
});


// Create here your api setup



app.post('/api/cars/all', (req, res) => {
  console.log("Brain file working,trying to get connected with backend to fetch data");

  CarsController.SendingCarsFromDb(req, res, req.body);
})

app.listen(process.env.PORT || 3001, () => console.log("Server Up and running"));
