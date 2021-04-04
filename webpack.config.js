const path = require('path');

module.exports ={
    mode:'development',
    entry:'./index.ts',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: "app.js"
    },
    module:{
        rules:[{
            test:/\.tsc?$/,
            use:'ts-loader',
        }]
    },
    resolve:{
        extensions:['ts','tsx','js']
    }
};