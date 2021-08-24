const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) =>{
    return response.json([
        "projeto 1"
        ,"projeto 2"
        ,"projeto 3"
    ]);
})
app.post('/projects', (request, response) =>{
    return response.json([
        "projeto 1"
        ,"projeto 2"
        ,"projeto 3"
        ,"projeto 4"
    ]);
})

app.put('/projects/:id', (request, response) =>{
    return response.json([
        "projeto 1"
        ,"projeto 2"
        ,"projeto 3"
        ,"projeto 4"
    ]);
})

app.delete('/projects/:id', (request, response) =>{
    return response.json([
        "projeto 1"
    ]);
})
app.listen(3333, () =>{
    console.log('👍');
});
