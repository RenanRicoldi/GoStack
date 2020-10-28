module.exports = {
    presets: [
        '@babel/preset-env',  // Converte o código baseado no ambiente que está sendo executado de forma que ele entenda (ie10, node)
        '@babel/preset-react'  // Adiciona as funcionalidades do react à conversão
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}

