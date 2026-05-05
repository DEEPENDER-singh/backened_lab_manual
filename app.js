const express = require('express');
const { connection } = require('./config/db');
const urlRouter = require('./routes/urlRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', urlRouter);

connection('mongodb://127.0.0.1:27017/urlShortDb')
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

//get view
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => {
  console.log('server started at port 3000');
});