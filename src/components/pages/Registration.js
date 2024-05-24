import { useEffect, useState } from "react";
import RoutingUtils from "../../RoutingUtils";
import LinkButton from "../LinkButton";
import Styling from "../../Styling";
import ApiRequest from "../../ApiRequests";
import { useNavigate } from "react-router-dom";

export default function HeroesShop() {
    const navigate = useNavigate();
    const [errorMessage, setMessage] = useState("");
    const WrongLogin = "";
    const WrongPassword = "";
    const WrongEmail = "";

    useEffect(()=>{
        Styling.PlainBlackBackground();
    })

    return (<>
        <div style={{ paddingTop: "12%" }}>
            <main className="form-signin w-25 m-auto">
                <form method="post" onSubmit={hanldeSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Registration</h1>

                    <div className="form-floating">
                        <input 
                        type="text" className={WrongLogin ? "form-control bg-danger-subtle" : "form-control"} id="floatingLogin" placeholder="user123" name="Login" autoFocus>
                        </input>
                        <label htmlFor="floatingLogin">Login</label>
                    </div>
                    <div className="my-1 form-floating">
                        <input 
                        type="password" className={WrongPassword ? "form-control bg-danger-subtle" : "form-control"} id="floatingPassword" placeholder="Password" name="Password">
                        </input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="my-1 form-floating">
                        <input 
                        type="email" className={WrongEmail ? "form-control bg-danger-subtle" : "form-control"} id="floatingEmail" placeholder="Email" name="Email">
                        </input>
                        <label htmlFor="floatingEmail">Email</label>
                    </div>

                    <div className="w-100 py-2 text-center text-danger">
                        {errorMessage}
                    </div>

                    <button className="my-3 btn btn-primary w-100 py-2" type="submit">Register</button>
                    <LinkButton displayLink="Index" text="Home" 
                        route={RoutingUtils.ToIndex} classes="my-2 btn btn-secondary w-100 py-2"/>
                </form>
            </main>
            </div>
    </>)

    async function hanldeSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const errorMessage = validateForm(formData)
        if (errorMessage !== "") {
            setMessage(errorMessage);
            return;
        }
 
        const responce = await ApiRequest.CreateAccount(formData.get('Login'), formData.get('Password'), formData.get('Email'))
        if ('error' in responce) {
            setMessage(responce['error']);
        }
        else {
            navigate(RoutingUtils.ToLogin);
        }
    }

    function validateForm(formData) { //TODO: use react useForm
        let message = "";
        if (formData.get('Login') === "") {
            message += "Login field can't be empty\n";
        }
        if (formData.get('Password') === "") {
            message += "Password field can't be empty\n"   
        }
        if (formData.get('Email') === "") {
            message += "Email field can't be empty\n"   
        }

        return message;
    }

}