// vue 单文件声明
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

// 图片资源
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.tiff';

// 三方库
declare module 'mockjs';
