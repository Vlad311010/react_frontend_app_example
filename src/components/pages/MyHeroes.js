import HeroInstance from "../HeroInstance";
import ApiRequest from "../../ApiRequests";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Styling from "../../Styling";
import LinkButton from "../LinkButton";
import RoutingUtils from "../../RoutingUtils";

export default function MyHeroes() {
    const { user } = useContext(UserContext);
    const [ownedHeroes, setOwnedHeroes] = useState([]);

    useEffect(() => {
        Styling.GrayGradientBackground();

        async function apiCall() {
          const apiResponse = user !== "" ? await ApiRequest.GetOwnedHeroes(user) : [];
          setOwnedHeroes(apiResponse);
        }
        apiCall();
      }, []);

    const pageData = ownedHeroes.length == 0 ? 
        <div>You don't own any hero:(</div> 
        :
        ownedHeroes.map(h => 
        <li key={h['heroId']}>
            <HeroInstance 
                heroClass={h['class']}
                name={h['name']}
                level={h['level']}
                maxhp={h['maxHP']}
                maxmp={h['maxMP']}
                hp={h['currentHP']}
                mp={h['currentMP']}
            />
        </li>
    );

    return (
    <ul>
        {pageData}
        <LinkButton displayLink="GetHero" text="Heroes Shop"
            route={RoutingUtils.ToHeroesShop} classes="my-5 mx-3 btn btn-warning btn-lg px-4"
        />
        
    </ul>)


    
}