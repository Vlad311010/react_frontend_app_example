import axios from 'axios';

export default class ApiRequest {
    static axiosInstance = axios.create({
        baseURL: 'https://localhost:7218/api/',
        headers: {
            "Content-type": "application/json",
        }
    })
    
    static async Login(login, password) {
        let response = await ApiRequest.axiosInstance.post('login', { Login: login, Password: password },  {withCredentials: true})
            .then(function (response) {
                // console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return {};
            });

        return response;
    }

    static async Logout() {
        let response = await ApiRequest.axiosInstance.post('logout', {},  {withCredentials: true})
            .then(function (response) {
                console.log(response.data);
                return true;
            })
            .catch(function (error) {
                console.log(error);
                return false;
            });

        return response;
    }

    static async GetUserData(login) {
        await ApiRequest.axiosInstance.get(`userData/${login}`, {withCredentials: true})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static async GetOwnedHeroes(login) {
        let heroes = await ApiRequest.axiosInstance.get(`userData/Heroes/${login}`, {withCredentials: true})
            .then(function (response) {
                // console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                
                return []
            });
            
        return heroes;
    }

    static async GetAllHeroes() {
        let heroes = await ApiRequest.axiosInstance.get(`userData/Heroes`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return []
            });
            
        return heroes;
    }

    static async BuyRandomHero(userLogin) {
        const body = {
            login: userLogin
        };

        let hero = await ApiRequest.axiosInstance.post(`heroesShop/RandomContract`, body, {withCredentials: true})
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error.response.data);
                return error.response.data;
            });
            
        return hero;
    }

    static async GetInventoryItems(login) {
        let items = await ApiRequest.axiosInstance.get(`userData/Items/${login}`, {withCredentials: true})
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return []
            });
            
        return items;
    }

    static async GetAvailableItems() {
        let items = await ApiRequest.axiosInstance.get(`userData/Items`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return []
            });
            
        return items;
    }

    static async BuyItem(userLogin, itemId) {
        const body = {
            login: userLogin
        };
        
        console.log(`shop/buyItem/${itemId}`);
        let item = await ApiRequest.axiosInstance.post(`shop/buyItem/${itemId}`, body, {withCredentials: true})
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return {}
            });
            
        return item;
    }

    static async CreateAccount(login, password, email) {
        const body = {
            Login: login,
            Password: password,
            Email: email
        }

        let responceData = await ApiRequest.axiosInstance.post('registrate', body, {withCredentials: true})
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error.response.data;
            });
            
        return responceData;
    }
}