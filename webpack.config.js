const path = require('path');
const miniCssExtract = require('mini-css-extract-plugin')
module.exports={
    mode:"development",
    devtool : "source-map",
    context:path.resolve(__dirname,'src'),
    entry:'./style.scss',
    module: {
        rules : [
            {
                test : /.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:miniCssExtract.loader,
                        options:{
                            reloadAll : true
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new miniCssExtract({
            filename:'[name].css'
        })
    ]
}
