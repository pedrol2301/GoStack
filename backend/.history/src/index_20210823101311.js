const express = require('express');

const app = express();

app.get('/projects', (request, response) =>{
    return response.json({ message : 'Olá de novo'});
})

app.listen(3333);
