// lib/csrf.ts
export const ensureCsrfCookie = async () => {
    const response = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('CSRFトークンの取得に失敗しました');
    }
};
