const express = require('express');
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
