const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public') //caminho que contém os arquivos públicos da aplicação
    },
    module: {
        rules: [
            {
                test: /\.js$/, //arquivos terminados em JS
                exclude: /node_modules/, //exclui a pasta node_modules
                use: {
                    loader: 'babel-loader', //sempre que o arquivo js não estiver no node_modules ele compila com o babel
                }
            },
            {
                test: /\.css$/, //arquivos terminados em CSS
                exclude: /node_modules/, //exclui a pasta node_modules
                use: [
                    { loader: 'style-loader' }, //injeta os estilos no html
                    { loader: 'css-loader' }  //entende o arquivo de css e as importações e passa para o webpack
                ]
            },
            {
                test: /.*\.(png|jpg|jpeg|gif)$/i, //arquivos do tipo image,
                use: { 
                    loader: 'file-loader'
                }
            }
        ]
    }
}