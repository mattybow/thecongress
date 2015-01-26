module.exports = {
  // Entry point for static analyzer:
  entry: ['webpack-dev-server/client?http://localhost:3000',
  './public/javascripts/components/index'
  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname+'/public/javascripts',

    // JS filename you're going to use in HTML
    filename: 'bundle.js',

    // Path you're going to use in HTML
    publicPath: '/public/javascripts'
  },

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      // Pass *.jsx files through jsx-loader transform
      { test: /\.js$/, loader: 'jsx?harmony' },
      { test: /\.css$/, loader: "css-loader" }
    ]
  }
};