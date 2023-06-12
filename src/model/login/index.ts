import {
    accountRule as AccountRule,
    passwordRule as PasswordRule,
} from '@/rules/login';

export interface Form {
    account: AccountRule;
    password: PasswordRule;
}

export type FormKeys = keyof Form;
