const express = require('express');
const app = express();
const users = require('./users.json');
const port = 3000;

// ✅ Middleware (VERY IMPORTANT for POST data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ GET → Show all users (HTML)
app.get('/users', (req, res) => {
    const html = `
    <h1>User List</h1>
    <ul>
    ${users.map(user => `
        <li>
            ${user.id} - ${user.name} 
            (${user.email})
        </li>
    `).join('')}
    </ul>`;
    
    res.send(html);
});

// ✅ GET → For testing in browser
app.get('/userdata', (req, res) => {
    res.send("Use POST method to send data");
});

// ✅ POST → Receive data
app.post('/userdata', (req, res) => {
    console.log("Received Data:", req.body);

    return res.json({
        msg: "data received",
        data: req.body
    });
});

// ✅ Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});