import createClient from 'openapi-fetch';
import type { Middleware } from 'openapi-fetch';
import Cookies from 'js-cookie';
import type { paths, components } from '@/external/open-api'

/**
 * ミドルウェアの定義
 * リクエストヘッダーに Accept: application/json を追加する
 * 特定のリクエストのみ違うAcceptを設定したい場合はこのmiddlewareを廃止して再設計が必要
 */
const myMiddleware: Middleware = {
    async onRequest({ request }) {
        request.headers.set('Accept', 'application/json');
        return request;
    },
};

/**
 * カスタム fetch の定義
 */
const customFetch: typeof fetch = async (input, init = {}) => {
    const xsrfToken = Cookies.get('XSRF-TOKEN');

    const modifiedHeaders: HeadersInit = {
        ...(init.headers ?? {}),
        'Content-Type': 'application/json',
        ...(xsrfToken ? { 'X-XSRF-TOKEN': xsrfToken } : {}),
    };

    const modifiedInit: RequestInit = {
        ...init,
        credentials: 'include', // クッキー送信を有効化
        headers: modifiedHeaders,
    };

    return fetch(input, modifiedInit);
};



const client = createClient<paths>({
    baseUrl: 'http://localhost:8000/api',
    fetch: customFetch,
});

client.use(myMiddleware);

const auth = createClient<paths>({
    baseUrl: 'http://localhost:8000',
    fetch: customFetch,
});

auth.use(myMiddleware);


// 個々から下の"AdminApi"の名前はプロジェクトごとにわかりやすいものに変更してください

/**
 * SWRのprefix
 * 複数のAPIサーバーを立てた場合にpathが同一のAPIを識別するのに利用する
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SWR_PREFIX = 'admin-api' as const;

/**
 * 定義されているPath一覧
 * 命名のconflictを避けるために、pathsは直接使わずに
 * AdminApiPathsを使うこと
 */
export type AdminApiPaths = paths;
/**
 * 定義されているComponents一覧
 * 命名のconflictを避けるために、componentsは直接使わずに
 * AdminApiComponentsを使うこと
 */
export type AdminApiComponents = components;

/**
 * 各種APIリクエストはこれを使う
 * getリクエストは原則swrでキャッシュすること
 */
export const adminApiClient = client;

/**
 * 認証APIリクエストはこれを使う
 */
export const authApiClient = auth;

/**
 * Getリクエストができるパスの型を取り出す
 */
type GetPaths<T> = {
    [K in keyof T]: T[K] extends { get: unknown } ? K : never;
}[keyof T];

/**
 * Getリクエストができるパス一覧
 */
export type AdminApiGetPaths = GetPaths<paths>;
