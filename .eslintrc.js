module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser', // 解析器
    },
    rules: {
        // 'prettier/prettier': 'error',
        // rules 配置规则 0 = off, 1 = warn, 2 = error
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        // 组件属性换行，每行最多一个  暂不开启， TODO: FIXME
        // 'vue/max-attributes-per-line': [
        //     2,
        //     {
        //         singleline: 1,
        //         multiline: 1,
        //     },
        // ],

        // vue-template 缩进 4
        'vue/html-indent': [1, 4],

        'no-unused-vars': [0, 'never'], // 暂时屏蔽 JSX namespace 的报错
        semi: [2, 'always'], // 结尾需要分号
    },
};
