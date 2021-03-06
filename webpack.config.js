/**
 * Created by Avinash Theppala on 4/27/2017.
 */
module.exports={
    entry:'./src/index.jsx',
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
            }
        ]
    }
};