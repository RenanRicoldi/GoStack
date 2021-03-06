import React from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {
    function handleSubmit(data: unknown) {
        console.log(data)
    }
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name='name' icon={FiUser} placeholder="Nome" />
                    <Input name='email' icon={FiMail} placeholder="E-mail" />
                    <Input name='password' icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="signup">
                    <FiArrowLeft />
                     Voltar para Log On
                </a>
            </Content>

        </Container>
    )
}

export default SignUp