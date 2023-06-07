const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: { extensions: ['.ts', '.tsx', '.js', '.json', '.vue'] }, // 默认导入文件目录下的 index.* 这些文件
    },
});
