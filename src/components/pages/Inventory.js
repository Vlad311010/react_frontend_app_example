import OwnedItem from "../OwnedItem";
import ApiRequest from "../../ApiRequests";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Styling from "../../Styling";

export default function MyHeroes() {
    const userCtx = useContext(UserContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Styling.GrayGradientBackground();

        async function apiCall() {
          const apiResponse = userCtx.isLoggedIn() ? await ApiRequest.GetInventoryItems(userCtx.user) : [];
          setItems(apiResponse);
        }
        apiCall();
      }, []);

      const pageData = items.map(item => 
            <OwnedItem key={item['id']}
                name={item['name']}
                description={item['description']}
                image={item['image']}
                count={item['amount']}
            />
        );

      return (
        <div className="my-4 container">
            <div className="row">
                {pageData}
            </div>
        </div>)
       
    }