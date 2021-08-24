const express = require('express');
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());


const projects = [];


app.get('/projects', (request, response) =>{
    return response.json(projects);
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
    return response.json([
        "projeto 1"
    ]);
})
app.listen(3333, () =>{
    console.log('👍');
});
