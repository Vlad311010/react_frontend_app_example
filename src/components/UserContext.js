import { createContext } from 'react';


export class UserCtxManager {
    constructor(login, ap = 0, money = 0) {
        this.user = login;
        this.ap = 0;
        this.money = 0;
    }
    
    setUser(userData) {
        this.user = userData['login'];
        this.ap = userData['ap'];
        this.money = userData['money'];
    }
    
    logout() {
        this.user = "";
    }

    update(ap, money) {
        this.ap = ap;
        this.money = money;
    }

    isLoggedIn() {
        return this.user !== "";
    }
}

// export const UserContext = createContext(new UserCtxManager(""));
export const UserContext = createContext({
    user: "",
    ap: 0,
    money: 0,
    setData: () => {}
});
