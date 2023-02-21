const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue/cli 3 버전부터 webpack.config.js 파일이 없어졌는데,

// 그 이유는 웹팩 기본 설정이 vue/cli-service에 들어가 있기 때문에 외부로 노출되어 있지 않기 때문이다.
