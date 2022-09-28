const express = require('express');
const bollyRouter = require('./route/bollydata');
const fitnessRouter = require('./route/fitnessdata');
const foodRouter = require('./route/fooddata');
const hollyRouter = require('./route/hollydata');
const techRouter = require('./route/techdata');
const trendRouter = require('./route/trenddata');
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use("/api", bollyRouter);
app.use("/api", fitnessRouter);
app.use("/api", foodRouter);
app.use("/api", hollyRouter);
app.use("/api", techRouter);
app.use("/api", trendRouter);


app.listen(process.env.PORT || port, ()=>{
    console.log(`Connected to Port ${port}`);
})

