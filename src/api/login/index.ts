import { Model_Login } from '@/model';
import http from '@/packages/axios';

/**
 * 登录
 *
 * @param params Record<Model_Login.FormKeys, string>
 * @returns boolean TODO FIXME
 */
export async function login(params: Record<Model_Login.FormKeys, string>) {
    return await http.postJson<boolean>('/api/login', {
        params,
    });
}
