const { defineConfig } = require('@vue/cli-service')
// add require for fs node library
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync('./certs/server.key'),
        cert: fs.readFileSync('./certs/server.crt'),
      }
    },
    client: {
      webSocketURL: 'wss://localhost:8080/ws',
    },
  }
})
