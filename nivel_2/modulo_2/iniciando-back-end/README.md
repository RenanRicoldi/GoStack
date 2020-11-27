<img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/>

# Conceitos aprendidos no Módulo 1 do Nível 2: Primeiro projeto com NodeJS

## Primeiro, aprendemos sobre Estruturas e padrões de projeto.

### Usando ESLint, Preetier e EditorConfig deixei o projeto da forma que eu uso normalmente.

- Aspas simples.
- Sem ponto e vírgula.
- Espaço entre as chaves.
- Identação com 4 espaços.
- Nova linha fim.
- Quebra de linha padrão unix.

----

## Também aprendemos como depurar o código.

Criamos um launch.json, que se acopla ao código rodando, e permite depurar o código, com pontos de interrupção, acompanhar os valores de variáveis, e observar o comportamento do programa durante sua execução.

----

## Por fim começamos nossa aplicação, e aprendemos coisas muito importante para o desenvolvimento back end com NodeJS.


## Separação de responsabilidades: Cada arquivo deve ter uma responsabilidade única:


### Routes: Recebe uma requisição, invoca outro arquivo para lidar com os dados, retorna uma resposta.

----

### Models: Contém uma classe com todos os dados do modelo, junto com seu construtor.

----

### Repositories: O Repository é um conceito introduzido no Data Mapper Pattern ou Repository Pattern que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação. Essa implementação visa isolar a forma com que nos comunicamos com os dados, abstraindo lógicas comuns de operações no banco. Geralmente o Repository possui os métodos comuns de comunicação com uma fonte de dados como listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce o desenvolvedor tende a encontrar outras operações repetitíveis e, com isso, popula o repositório com mais funcionalidades.

----

### Services: O Service é um conceito introduzido no Service Pattern. Ele tem como objetivo abstrair regras de negócio das rotas, além de tornar nosso código mais reutilizável. No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas da nossa aplicação e deixá-las responsáveis apenas pelo que realmente devem fazer: receber uma requisição, repassar os dados da requisição a outro arquivo e devolver uma resposta. O Service deve ter um nome descritivo (ex.: updateDeliveryManProfileService) e **sempre** possuir apenas **um** método (ex.: execute()). Além disso, caso outra rota ou arquivo precise executar essa  mesma ação, basta chamar e executar esse Service, obedecedo assim a outro importante princípio: DRY (Don't Repeat Yourself).

----

## Injeção de dependências: Sempre que tivermos uma dependência externa, ao invés de instaciar novamente, nós a recebemos como parâmetro.

```ts
private appointmentsRepository: AppointmentsRepository

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository
    }
```

## DTO _(Data Transfer Object)_: Ao invés de passarmos todos os dados entre arquivos por parâmetros, utilizamos um objeto que contém tudo o que queremos passar e receber, de forma que dentro da classe que iremos receber os dados, desestruturamos para uso deles.

```ts
interface CreateAppointmentDTO {
    provider: string
    date: Date
}

public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date })

    this.appointments.push(appointment)

    return appointment
}
```
### Para tratativa de erros e excessões, utilizamos no service o throw Error(mensagem), de forma que na route podemos pegar essa excessão e retorna a mensagem para o cliente.
