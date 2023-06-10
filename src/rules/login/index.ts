import { baseRule } from '../validator';

class accountRule extends baseRule {
    override validate = () => {
        // TODO FIXME: 账号规则
        if (this.value === '') {
            this.errMsg = '请输入账号';
            return 'error';
        }
        this.errMsg = '';
    };
}

class passwordRule extends baseRule {
    override validate = () => {
        // TODO FIXME: 密码规则
        if (this.value === '') {
            this.errMsg = '请输入密码';
            return 'error';
        }
        this.errMsg = '';
    };
}

export { accountRule, passwordRule };
