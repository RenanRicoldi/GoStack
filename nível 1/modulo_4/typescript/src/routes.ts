import { Request, Response } from 'express'

import CreateUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = CreateUser({
        name: 'Renan', 
        email: 'renan.ricoldi@uel.br', 
        password: 'password', 
        techs: [
            {
                title: 'ReactJs',
                experience: 10
            }
        ]
    })
    
    return response.json({message: 'hello world'})
}