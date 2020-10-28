import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import api from './services/api'
import './App.css'

// import backgroundImage from './assets/background.jpeg'

function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => { 
        api.get('projects').then( response => { 
            setProjects(response.data)
        })
    }, [])


    async function handleAddProject(projectName) {
        // setProjects([ ... projects, projectName+Date.now()])

        const response = await api.post('projects', { 
            title: 'Novo Projeto ' + Date.now(),
            owner: 'Renan Ricoldi'
        })

        const project = response.data
        setProjects([ ... projects, project.pop() ])
    }

    return (
        <>
            <Header title='Title 1' />

            {/* <img width={300} src={backgroundImage} alt='homem na água'/> */}
            
            <ul>
                { projects.map(project => <li key={ project.id }>{ project.title }</li>) }
            </ul>

            <button type='button' onClick={ () => handleAddProject('Novo Projeto') }>Adicionar Projeto</button>
        </>
    )
}

export default App