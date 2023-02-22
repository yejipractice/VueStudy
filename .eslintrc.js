// 참고 자료
// https://beaniejoy.tistory.com/74

// 하나의 프로젝트를 협업하여 개발할 때 code convention은 중요. 
// eslint는 code convention을 감지하는 기능 제공 

// eslint 관련 npm 설치
// npm install --save-dev eslint eslint-plugin-vue
// babel 관련 npm 설치 
// babel은 브라우저에서 최신 js 문법을 이해할 수 있도록 변환 
// npm install --save-dev @babel/eslint-parser

module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    env: {
        node: true,
        browser: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ]
};

