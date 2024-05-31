import Hero from "../Hero";
import ApiRequest from "../../ApiRequests";
import { useContext, useEffect, useState } from "react";
import Styling from "../../Styling";
import { UserContext } from "../UserContext";

export default function HeroesShop() {
    const { user } = useContext(UserContext);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [heroes, setHeroes] = useState([]);
    const [ownedHeroesIds, setOwnedHeroes] = useState([]);

    useEffect(() => {
        Styling.GrayGradientBackground();

        async function apiCall() {
          const heroesApiResponse = await ApiRequest.GetAllHeroes();
          setHeroes(heroesApiResponse);
          const ownedHeroesApiResponse = await ApiRequest.GetOwnedHeroes(user);
          setOwnedHeroes(ownedHeroesApiResponse.map(h => h['heroId']));
        }
        apiCall();
    }, []);

    const elements = [];
    for (let i = 0; i < heroes.length; i++) {
        elements.push(
            <div className="col-3 my-3" key={heroes[i]['heroId']}>
                <Hero 
                    heroClass={heroes[i]['class']}
                    name={heroes[i]['name']}
                    hp={heroes[i]['maxHP']}
                    mp={heroes[i]['maxMP']}
                    addOwnedTag={ownedHeroesIds.includes(heroes[i]['heroId'])}
                />
            </div>
        )
    };

    return (<>
        <div className="GridDisplay">
            {elements}
        </div>
        <div className="w-100 py-2 text-center ">
            <div className="w-10 text-bg-primary">
                {successMessage}
            </div>
        </div>
        <div className="w-100 py-2 text-center ">
            <div className="w-20 text-bg-warning">
                {errorMessage}
            </div>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <form method="post" onSubmit={hangleGetRandomHero}>
                <button type="submit" className=" btn btn-primary btn-lg w-100 px-5 py-2 gap-3">
                    Get Random Contract
                </button>
            </form>
        </div>

    </>)

    async function hangleGetRandomHero(e) {
        e.preventDefault();
        setSuccessMessage("")
        setErrorMessage("");

        const responce = await ApiRequest.BuyRandomHero();
        if ('error' in responce) {
            setErrorMessage(responce['error']);
        }
        else {
            setSuccessMessage(`You sealed contract with ${responce['name']} [${responce['heroClass']}]`);    
            const ownedHeroesCopy = ownedHeroesIds.slice();
            ownedHeroesCopy.push(responce['id']);
            setOwnedHeroes(ownedHeroesCopy);
        }
    }

}
