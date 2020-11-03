Babel: Converter (transpilar) código do React para um código que o browser entenda;

Webpack: Para cada tipo de arquivo (.js, .css, .png) converte o código de uma maneira diferente;

Loaders: babel-loader, css-loader, image-loader;


JSX: HTML dentro do JavaScript (Javascript XML);

Componente:

Propriedade: informação passada do componente pai para o componente filho;

No pai:
```js
<Header title='Title 1' />
```

No filho:
```js
export default function Header(props) {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    )
}
```

Usamos a propriedade *children* para acessarmos os componentes inseridos no filho pelo pai, desta forma:

No pai:
```js
<Header title='Title 1' >
    <ul>
        <li>Homepage</li>
        <li>Projects</li>
    </ul>
</Header>
```

No filho:
```js
export default function Header({ title, children }) {
    return (
        <header>
            <h1>{ title }</h1>
            { children }
        </header>
    )
}
```

Estado & Imutabilidade: 

Estados são variáveis que ao serem alteradas ativam um gatilho que renderiza o componente novamente.
```js
const [projects, setProjects] = useState(['Desenvolvimento de app', 'Fron-end web'])
```

No princípio de imutabilidade não podemos alterar valores, temos que criar novamente sempre que quisermos mudá-los
```js
setProjects([ ... projects, projectName+Date.now()])
```

O useEffect executa algo quando um gatilho é ativado:
```js
// useEffect(função que vou disparar, quando vou disparar)
useEffect(() => { api.get('/projects').then( response => { console.log(response) }) }, [])
```