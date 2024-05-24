import { ClassNameToColor } from "../Enums.ts";

export default function Hero({ heroClass, name, hp, mp, addOwnedTag}) {

    const ownedTag = addOwnedTag ? 
    <div className="mt-1 ms-3 me-3 text-center text-white bg-success"><u className="">Already Owned</u></div>
    :
    <></>

    return (
        <div className="HeroView">
            <div className="HeroView-Type">
                <div style={{ display: "inline" }} className="HeroView-Type Border-Bottom">
                    <div>Class:</div>
                    <div style={{ color: ClassNameToColor(heroClass) }}>{heroClass}</div>
                </div>
                <div style={{ display: "inline" }} className="mx-4 HeroView-Type Border-Bottom Step">
                    <div>Name:</div>
                    <div>{name}</div>
                </div>
            </div>
            <div>
                Stats
                <div style={{ height: "1.4em" }} className="Border">
                    <div className="HPBar" style={{ width: '100%' }}></div>
                    <div className="BarText">{hp}</div>
                </div>
                <div style={{ height: "1.4em" }} className="Border">
                    <div className="MPBar" style={{ width: '100%' }}></div>
                    <div className="BarText">{mp}</div>
                </div>
            </div>
            {ownedTag}
        </div>
    )
}