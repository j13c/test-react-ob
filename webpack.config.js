module.exports = {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', 'css', '.gif', '.png', '.jpg', '.jpeg', '.svg'],
      alias: {
        '@': sourceDirectory,
      },
    },
    context: __dirname,
    entry: {
      app: ['./index.jsx']
    },
    output: {
      path: './build',
      filename: 'app.js',
      publicPath: '/build/'
    },
    module: {
      loaders: [
        {
          test: /(\.js|.jsx)$/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    },
}
