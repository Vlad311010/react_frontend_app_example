import { createContext } from 'react';

export const UserContext = createContext({
    user: "",
    ap: 0,
    money: 0,
    setUser: () => {},
    setAP: () => {},
    setMoney: () => {},
});
