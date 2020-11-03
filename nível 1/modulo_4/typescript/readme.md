### Quando utilizar tipagem no código

    - Quando estamos importando uma biblioteca já com os tipos, não precisamos.
    - Porém quando usamos derivados desta biblioteca em outros arquivos, sem a importação, precisamos.

### Criando um tipo

Para criar um usuário: name, email, password, techs podemos definir direto na função os tipos de parâmetros, ou receber objetos com tipo definido.

```ts
function CreateUser(name = '', email: string, password: string) {
    const user = {
        name,
        email,
        password
    }
    
    return user
}
```

```ts
interface TechObject {
    title: string
    experience: number
}

interface createUserData {
    name?: string
    email: string
    password: string
    techs: Array<string | TechObject>
}

function CreateUser({ name, email, password }: createUserData) {
    const user = {
        name,
        email,
        password
    }

    return user
}
```