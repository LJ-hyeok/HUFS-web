const express = require('express');
const app = express();
const cors = require("cors"); // CORS 허용

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // CORS 허용

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.render('get_result', { q });
});

app.post("/submit", (req, res) => {
    const text = req.body.text;
    res.render('post_result', { text })
});

app.get('/api/data', (req, res) => {
    res.json({ title: '서버 데이터', timestamp: Date.now() });
});

app.post('/api/save', (req, res) => {
    const text = req.body.text;
    res.json({ success: true, received: text });
});