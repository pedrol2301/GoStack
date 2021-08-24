const { request } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());


const projects = [];

function logrequest(request, response, next){
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.log(logLabel);
    return next;

}
app.use(logrequest);


app.get('/projects', (request, response) =>{
    const { title } = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
})


app.post('/projects', (request, response) =>{

    const {title, owner } = request.body;

    const project = {id : uuid(), title, owner};

    projects.push(project)

    return response.json(project);
})

app.put('/projects/:id', (request, response) =>{

    const { id } = request.params;
    const {title, owner } = request.body;

    const projetcIndex = projects.findIndex(project => project.id === id);

    if (projetcIndex < 0) {
        return response.status(400).json({error:"Projeto não encontrado"})
    }

    const project ={
        id,
       title,
       owner 
    };
    projects[projetcIndex] = project;
    return response.json(project);
})

app.delete('/projects/:id', (request, response) =>{
    const { id } = request.params;

    const projetcIndex = projects.findIndex(project => project.id === id);

    if (projetcIndex < 0) {
        return response.status(400).json({error:"Projeto não encontrado"})
    }

    projects.splice(projetcIndex, 1);

    return response.status(200).send();
})
app.listen(3333, () =>{
    console.log('👍');
});
