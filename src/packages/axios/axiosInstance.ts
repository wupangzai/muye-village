import axios from 'axios';
import { Message } from 'element-ui';

export interface Options {
    configApi: string;
    responseCodeFn: any;
    responseErrorCodeFn: any;
    headers: Record<string, string>;
    message: () => void;
    [propname: string]: any;
}

const axiosInstance = axios.create({
    baseURL: '', // 需要时再配置，不配置会默认当前所在 url
});

// options 配置
const options: Options = {
    configApi: '',
    responseCodeFn: {},
    responseErrorCodeFn: {},
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    message: function () {},
};

axiosInstance.interceptors.request.use(
    // 成功请求拦截器
    (config) => {
        // 跨域设置
        config.withCredentials = true;
        // header 设置，配合后面 setOption 函数，达到动态控制 header 的效果
        const { headers } = options;
        Object.keys(headers).forEach((header) => {
            config.headers[header] = headers[header];
        });
        return config;
    },
    // 失败请求拦截器
    (error) => {
        throw new Error(error);
    },
);

axiosInstance.interceptors.response.use(
    // 成功响应拦截器
    (response) => {
        // 一般情况下，成功时，我们只关心 response 中返回的 data
        return response.data;
    },

    // 失败响应拦截器
    (error) => {
        // 失败时，默认抛出错误信息， todo: data -> amagi 配置的字段
        Message.error(error.response.data);
        return Promise.reject(error);
    },
);

export { axiosInstance, options };
