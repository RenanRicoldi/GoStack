//micro framework para o uso de rotas, middlewares 
const express = require('express')
const { uuid, isUuid } = require('uuidv4')
const cors = require('cors')

const app = express()
app.use(cors()) // permite qualquer tipo de acesso
// Diz ao express que vamos receber parâmetros em json
app.use(express.json())

/*
 * Tipos de parâmetros:
 *  Query Params: Filtro e paginação
 *  Route Params: Identificar recursos
 *  Request Body: Conteúdo na hora de criar ou editar um recurso
*/

/**
 * Middleware:
 * 
 * Interceptador de requisições que interrompem totalmente a requisição ou alteram os dados dela.
 */

const projects = []

function logRequests(request, response, next) {
    const { method, url } = request

    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.time(logLabel)

    next()

    console.timeEnd(logLabel)
}

function validateProjetId(request, response, next) {
    const { id } = request.params

    if(!isUuid(id)) {
        return response.status(400).json({  message: 'Invalid id.'})
    }

    return next()
}

app.use(logRequests)
// app.use('/projects/:id', validateProjetId)

app.get('/projects', (request, response) => {
    const { title } = request.query

    const results = title ? projects.filter(project => project.title.includes(title)) : projects

    return response.status(200).json(results    )
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body

    const project = { id: uuid(), title, owner }

    projects.push(project)

    return response.status(201).json(project)

})

app.put('/projects/:id', validateProjetId, (request, response) => {
    const { id } = request.params

    const projectIndex = projects.find(project => project.id === id)

    if(projectIndex < 0) 
        return response.status(400).json({'message': 'Não foi possível encontrar o projeto com este id.'})

    projects[projectIndex] = { id, ... request.body }
    return response.status(200).json(projects[projectIndex])
})

app.delete('/projects/:id', validateProjetId, (request, response) => {
    const { id } = request.params

    const projectIndex = projects.find(project => project.id === id)
    
    if(projectIndex < 0) 
        return response.status(400).json({'message': 'Não foi possível encontrar o projeto com este id.'})
    
    projects.splice(projectIndex, 1)
    
    return response.status(204).send()
})


//ouve uma porta
app.listen(3333, () => {
    console.log('🚀 server listening!')
})