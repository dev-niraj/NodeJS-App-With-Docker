const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi There! This is Test Website Deployed using Docker!');
});

app.listen(8080, () => {
    console.log("Listening on Port 8080");
});