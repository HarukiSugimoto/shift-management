import { adminApiClient, type AdminApiPaths } from "@/external";
import React from "react";
import useSWR, { mutate } from 'swr';
const fetchArguments = {
    url: '/me' as const,
};

const swrKey = '/me' as const;
const fetcher = () =>
    adminApiClient.GET(fetchArguments.url);

const useAdminLoginSessionContextInit = () => {
    const [session, setSession] = React.useState<{
        status: 'unverified' | 'authenticated' | 'unauthenticated' | 'error';
        data?: AdminApiPaths['/me']['get']['responses']['200']['content']['application/json'];
    }>({
        status: 'unverified',
    });

    useSWR(swrKey, fetcher, {
        onSuccess: (d) => {
            console.log('useSWR onSuccess', d);
            if (d.response.ok) {
                setSession({ status: 'authenticated', data: d.data });
            } else if (d.response.status === 401) {
                setSession({ status: 'unauthenticated' });
            } else {
                setSession({ status: 'error' });
            }
        },
        onError: (error) => {
            setSession({ status: 'error' });
            throw new Error(error.message);
        },
    });

    // SWRのキャッシュをすべて削除する処理
    const clearCache = () => mutate(() => true, undefined, { revalidate: false });

    const deleteSession = () => {
        // ログアウト時にはSWRキャッシュをすべて削除
        clearCache();
        setSession({
        status: 'unauthenticated',
        });
    };

    const refetchSession = () => {
        mutate(swrKey);
    };
    return {
        /**
         * セッション情報
         */
        session,
        /**
         * セッション情報更新処理
         */
        refetchSession,
        /**
         * ログアウト時のセッション情報削除処理
         */
        deleteSession,
    };
};

const sessionContext = React.createContext<ReturnType<typeof useAdminLoginSessionContextInit> | null>(
    null
);

export const useAdminLoginSessionContext = () => {
    const context = React.useContext(sessionContext);
    if (!context) {
        throw new Error('useAdminLoginSessionContext must be used within a AdminLoginSessionContextProvider');
    }
    return context;
};

export const AdminLoginSessionContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const sessionState = useAdminLoginSessionContextInit();
    return <sessionContext.Provider value={sessionState}>{props.children}</sessionContext.Provider>;
};
