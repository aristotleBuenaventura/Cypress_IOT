const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://192.168.110.155:46800',
  },
})


// https://192.168.110.155:15911/