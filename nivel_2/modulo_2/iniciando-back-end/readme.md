Autenticação jwt

rota /sessions

enviamos email e senha
busca no banco e retorna um Token JWT

o Token possui header, com o tipo de token e algoritmo de criptografia. Payload, com dados adicionais do usuário. Assinatura.
