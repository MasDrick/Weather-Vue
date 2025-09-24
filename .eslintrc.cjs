module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    // твои кастомные правила
    'vue/multi-word-component-names': 'off', // удобно отключить для простых компонентов
  },
}
