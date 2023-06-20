import Mock from 'mockjs';

/** 登录 mock */
Mock.mock('/mock/login', (options: any) => {
    const admin = {
        account: 'wzf',
        password: '123456',
    };
    const params = JSON.parse(options.body);
    return Object.keys(params).every(
        (key: string) => admin[key as keyof typeof admin] === params[key],
    );
});
