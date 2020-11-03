import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        }).catch(error => {console.error(error)})
    },[])

    async function handleAddProject() {
        const response = await api.post('projects', { 
            title: 'Novo ' + Date.now(), 
            owner: 'Renan Ricoldi'
        })

        const project = response.data

        setProjects([ ... projects, project])
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#7159c1' />
            <FlatList 
                data={projects} 
                keyExtractor={ project => project.id } 
                renderItem={ ({ item: project }) => (
                    <Text  style={ styles.project }>{ project.title }</Text>
                ) }
            />

            <TouchableOpacity activeOpacity={0.6} style={ styles.button } onPress={ handleAddProject }>
                <Text style={ styles.buttonText }>Adicionar Projeto</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    }
})

export default App