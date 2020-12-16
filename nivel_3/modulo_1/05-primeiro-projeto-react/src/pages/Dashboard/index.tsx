import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './styles'
import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} />
            <Title>Explore Repositórios no github</Title>

            <Form>
                <input placeholder='Digite o nome do repositório' />
                <button type='submit'>Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src='https://avatars1.githubusercontent.com/u/53321448?s=460&u=e7aa6cbf3339d06205b680f0e225a9573bdb8d30&v=4'
                    />
                    <div>
                        <strong>RenanRicoldi/GoStack</strong>
                        <p>Repositório onde guardo os aprendizados do Bootcamp Gostack, fornecido pela Rocketseat.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard
