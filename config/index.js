require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to database successfully');
});

exports.db = db;
