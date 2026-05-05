const express = require('express');
<<<<<<< HEAD
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Set cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('cookieName', 'cookieValue', {
        maxAge: 900000,
        httpOnly: true
    });
    res.send('Cookie has been set');
});

// Get cookie
app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies.cookieName;
    res.send(cookie ? `Cookie: ${cookie}` : 'No cookie found');
});

// Delete cookie
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('cookieName');
    res.send('Cookie deleted');
});

app.listen(3000, () => console.log('Server running on port 3000'));
=======
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
>>>>>>> 46271478866a7b363ad3d66561185c3eb24c8468
