const { defineConfig } = require( '@vue/cli-service' )

module.exports = defineConfig( {
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  filenameHashing: false,
  publicPath: "auto",
  transpileDependencies: true,
} )
