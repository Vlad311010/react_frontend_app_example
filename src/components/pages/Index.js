import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Routing from '../../RoutingUtils';

import Styling from '../../Styling';
import LinkButton from '../LinkButton';

export default function Index() {
    useEffect(()=>{
        Styling.IndexPageStyle();
    })

    const userCtx = useContext(UserContext);
    let buttons;

    if (userCtx.isLoggedIn()) {
        buttons = <>
                    <div className="d-grid py-2 gap-3 d-sm-flex justify-content-sm-center">
                        <a className=" btn btn-primary btn-lg px-4 gap-3">Play!</a>
                        <LinkButton text="My Heroes" displayLink="Heroes" 
                            route={Routing.ToHeroes} classes="btn btn-primary btn-lg px-4 gap-3" />
                        <LinkButton text="Inventory" displayLink="Inventory" 
                            route={Routing.ToInventory} classes="btn btn-primary btn-lg px-4 gap-3" />
                    </div>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <LinkButton text="Shop" displayLink="Shop" 
                            route={Routing.ToShop} classes="btn btn-warning btn-lg px-4" />

                        <LinkButton text="Heroes Shop" displayLink="HeroesShop" 
                            route={Routing.ToHeroesShop} classes="btn btn-warning btn-lg px-4" />
                    </div>
                </>
    }
    else {
        buttons = <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <LinkButton text="Login" displayLink="Login" 
                        route={Routing.ToLogin} classes="btn btn-primary btn-lg px-4 gap-3" />
                    <LinkButton text="Create Account" displayLink="Register" 
                        route={Routing.ToRegistration} classes="btn btn-secondary btn-lg px-4" />
                  </div>
    }

    return (
        <div className="px-4 py-5 my-5 text-center text-white">
            <h1 className="display-5 fw-bold">Welcome page Title</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Welcome page text. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Maecenas nisi ipsum, placerat ac dictum at, tristique eget dolor.
                    Nam dolor risus, elementum sit amet ultrices vel, egestas vel metus. Sed dapibus tincidunt lacus, vitae aliquet erat rutrum eu.
                    Nulla quis massa lectus. Suspendisse euismod lacus eros, in porttitor nulla iaculis ac. Proin aliquet tortor ac vulputate tempus.
                    Nulla sollicitudin aliquam diam vel tristique. Morbi vitae condimentum sem, quis molestie orci. Fusce aliquet laoreet ligula. In in diam ut lectus pulvinar cursus cursus non nibh.
                </p>

                {buttons}
            </div>
        </div>
    )
}