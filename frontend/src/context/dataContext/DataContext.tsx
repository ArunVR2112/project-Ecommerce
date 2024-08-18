import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';
import * as React from 'react';

export type Result = {
    status: number,
    data: object,
}

export interface UserContextInterface {
    user: Result,
    setUser: Dispatch<SetStateAction<Result>>,
}

const defaultState = {
    user: {
        status: 0,
        data: {}
    },
    setUser: () => { }
} as UserContextInterface;

export const DataContext = createContext<UserContextInterface>(defaultState);

type UserProviderProps = {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<Result>({
        status: 0,
        data: {}
    });

    return (
        <DataContext.Provider value={{ user, setUser }}>
            {children}
        </DataContext.Provider>
    );
}
