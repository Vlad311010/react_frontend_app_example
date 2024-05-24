import { useContext, useEffect, useState } from "react";
import ApiRequest from "../../ApiRequests";
import Item from "../Item";
import Styling from "../../Styling";

import APBoosterImg from '../../css/images/icon.png'
import { UserContext } from "../UserContext";

export default function Shop() {
    const [items, setItems] = useState([]);
    const { user, setMoney, setAP } = useContext(UserContext);


    useEffect(() => {
        Styling.GrayGradientBackground();

        async function apiCall() {
            const apiResponse = await ApiRequest.GetAvailableItems();
            setItems(apiResponse);
        }
        apiCall();
      }, []);

    let elements = items.map(item => 
        <Item key={item['id']}
        id={item['id']}
        name={item['name']}
        description={item['description']}
        image={item['image']}
        price={item['price']}
        callback={(e) => handleBuyItem(e, user, item['id'])}
        />
    )

    return (
        <div className="GridDisplay">
            <Item
            id="-1"
            name="AP"
            description="Recieve 5 AP"
            image={APBoosterImg}
            price="250"
            callback={(e) => handleBuyAP(e, user)}
            />
           {elements}
        </div>
    );

    async function handleBuyItem(e, userLogin, itemId) {
        e.preventDefault();

        const responce = await ApiRequest.BuyItem(userLogin, itemId);
        if ('error' in responce) {
            console.log(responce['error']);
        }
        else {
            setMoney(responce['moneyLeft']);
        }
    }

    async function handleBuyAP(e, userLogin) {
        e.preventDefault();

        const responce = await ApiRequest.BuyAPBooster(userLogin);
        if ('error' in responce) {
            console.log(responce['error']);
        }
        else {
            setMoney(responce['moneyLeft']);
            setAP(responce['ap']);
        }
    }

}