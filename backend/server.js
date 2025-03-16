const express = require('express');
const app = express();
const port = 5050;

app.get('/api', (req, res) => {
    res.json({
        "user": {
            "name": "Romain Durand",
            "email": "romain@example.com",
            "phone": "1234567890",
            "age": 20
        }
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)}
);