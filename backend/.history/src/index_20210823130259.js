const express = require('express');

const app = express();

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
app.listen(3333, () =>{
    console.log('👍');
});
