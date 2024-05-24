import { ClassNameToColor } from "../Enums.ts";

export default function HeroInstance({ heroClass, name, level, maxhp, maxmp, hp, mp }) {
    const hpPercentage = hp/maxhp * 100;
    const mpPercentage = mp/maxmp * 100;

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
                <div style={{ display: "inline" }} className="HeroView-Type Border-Bottom Step">
                    <div>Lv:</div>
                    <div>{level}</div>
                </div>
            </div>
            <div>
                Stats
                <div style={{ height: "1.4em" }} className="Border">
                    <div className="HPBar" style={{ width: hpPercentage + '%' }}></div>
                    <div className="BarText">{hp}</div>
                </div>
                <div style={{ height: "1.4em" }} className="Border">
                    <div className="MPBar" style={{ width: mpPercentage +'%' }}></div>
                    <div className="BarText">{mp}</div>
                </div>
            </div>
        </div>
    )
}