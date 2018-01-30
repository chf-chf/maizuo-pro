module.exports = {
    entry:"./src/main.js",
    output:{
        path:__dirname,
        filename:"dist/app.js"
    },
    module:{
        loaders:[
            { test:/\.js$/,loader:"babel-loader", exclude:/node_modules/ },
            { test:/\.css$/, loader:"style-loader!css-style" },
            { test:/\.(png|gif|jpg|jpeg|ttf)$/, loader:"file-loader" }
        ]
    }
}