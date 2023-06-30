const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default;
const AutoImport = require('unplugin-auto-import/webpack');
const ImportList = require('./src/packages/auto-import/index.ts');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    parallel: false,
    transpileDependencies: true,

    css: {
        loaderOptions: {
            less: {
                additionalData: `
                    @import "@/assets/css/index.less";`,
            },
        },
    },

    configureWebpack: {
        resolve: { extensions: ['.ts', '.tsx', '.js', '.json', '.vue'] }, // 默认导入文件目录下的 index.* 这些文件

        plugins: [
            ScriptSetup({
                reactivityTransform: true, // 开启响应式语法糖
            }),
            AutoImport({
                includes: [/\.vue$/, /\.vue\?vue/], // .vue
                imports: [
                    '@vue/composition-api',
                    {
                        'vue-property-decorator':
                            ImportList.autoImportListFromVue,
                    },
                ],
                /**
                 * dts 用于配置自动生成 .d.ts 文件的路径，默认关闭，以免每次启动项目时都会自动生成新的文件
                 * 当需要更新时，修改 dts 的值为 './@types/auto-imports.d.ts'，启动项目即可在 @types 下自动生成 .d.ts 文件，更新完成后将配置项关闭
                 * **/
                dts: false,
                eslintrc: {
                    /**
                     * enabled 用于配置是否自动生成 .eslintrc-auto-import.json 文件，默认关闭，以免每次启动项目时都会自动生成新的文件
                     * 当需要更新配置时，修改 enabled 值为 true，启动项目即可在根目录下自动生成 .eslintrc-auto-import.json 文件，更新完成后将配置项关闭
                     * **/
                    enabled: false,
                    filepath: './.eslintrc-auto-import.json',
                },
            }),
        ],
    },

    //devProxy
    devServer: {
        proxy: {
            '/api': {
                target: 'https://fanyi.baidu.com', // TODO:FIXME, wait from amagi
                changeOrigin: true,
            },
        },
        port: '8080',
    },
});
