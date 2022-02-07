const express = require('express');
const mongoose = require('mongoose');

const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();

app.use(express.json());

//Enter personal Connection String from mongo database here
mongoose.connect('mongodb+srv://Diyako:1234@cluster0.edpoh.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(restaurantRouter);

app.listen(4500, () => { console.log('Server is running on port 4500') });