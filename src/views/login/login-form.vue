<template>
    <div class="login-form">
        <h3 class="title">MUYE VILLAGE SYSTEM</h3>
        <el-form class="form">
            <el-form-item class="form-item" :error="form.account.errMsg">
                <el-input
                    v-model="form.account.value"
                    @blur="form.account.validate"
                    @input="form.account.validate"
                    placeholder="请输入账号"
                    prefix-icon="el-icon-user"
                ></el-input>
            </el-form-item>
            <el-form-item class="form-item" :error="form.password.errMsg">
                <el-input
                    v-model="form.password.value"
                    @blur="form.password.validate"
                    @input="form.password.validate"
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-lock"
                    show-password
                ></el-input>
            </el-form-item>
            <el-form-item class="form-item">
                <div class="login-submit">
                    <el-button
                        class="submit-btn"
                        size="medium"
                        @click="submitLogin"
                    >
                        立即登录
                    </el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { accountRule, passwordRule } from '@/rules/login';
import { Model_Login } from '@/model';

@Component
export default class LoginForm extends Vue {
    form: Model_Login.Form = {
        account: new accountRule(),
        password: new passwordRule(),
    };

    async submitLogin() {
        const formItemKeys = Object.keys(this.form);
        formItemKeys.forEach((key) => {
            this.form[key as Model_Login.FormKeys].validate();
        });

        const isExistError = formItemKeys.some(
            (key) => this.form[key as Model_Login.FormKeys].errMsg,
        );

        if (isExistError) {
            this.$message.error('请按照提示修改错误信息');
            return;
        }

        // TODO: FIXME rm mock
        const result = await this.$http.postJson<
            boolean,
            Record<Model_Login.FormKeys, string>
        >('/mock/login', {
            account: this.form.account.value,
            password: this.form.password.value,
        });

        if (result) {
            this.$router.replace({
                name: 'Home',
            });
        }
    }
}
</script>

<style lang="less" scoped>
.login-form {
    display: flex;
    flex-direction: column;
    padding-left: 15%;

    .title {
        margin: 7% auto 3% auto;
    }

    .form {
        .form-item {
            margin: 8% auto 0 auto;
            width: 60%;
        }
        .login-submit {
            text-align: center;
        }

        .submit-btn {
            margin-top: 3%;
            background-color: transparent;
            position: relative;
            color: #ffff;
            width: 160px;
            height: 45px;
            font-size: 12px;
            border: none;
            border-radius: 4px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to right, #1359a1, #25a04a);
                z-index: -2;
                border-radius: 4px;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                z-index: -1;
            }
            &:hover {
                &::after {
                    width: 100%;
                    background-image: linear-gradient(
                        to right,
                        #1359a1,
                        #1359a1
                    );
                    transition: width 0.3s linear;
                    border-radius: 4px;
                }
            }
        }
        /deep/ .el-input {
            input {
                border: none;
                border-bottom: 1px solid #dcdfe6;
                transition: all 1s ease;

                &:focus {
                    border-bottom: 1px solid #23364c;
                }
            }
        }
    }
}
</style>

<style lang="less">
// 去除 auto-fill 的背景色
input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important;
}
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
    -webkit-text-fill-color: #333 !important;
    transition: background-color 5000s ease-in-out 0s !important;
}
</style>
