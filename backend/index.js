const express = require('express');
const mongoose = require('mongoose');
const servers = require('./routes/api/servers');
const app = express();
const port = 5000;

// Bodyparser Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/aternos-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/servers', servers);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
