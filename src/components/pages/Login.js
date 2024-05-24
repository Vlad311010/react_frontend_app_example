import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect  } from 'react';

import ApiRequest from '../../ApiRequests';
import Routing from '../../RoutingUtils';
import { UserContext } from '../UserContext';
import Styling from '../../Styling';
import LinkButton from '../LinkButton';


export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setMessage] = useState("");
    const { setUser, setAP, setMoney } = useContext(UserContext);
    
    useEffect(()=>{
        Styling.PlainBlackBackground();
    })

    return (
        <div style={{paddingTop:12+'%'}}>
            <main className="form-signin w-25 m-auto">
                <form method='post' onSubmit={handleLogin}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingLogin" placeholder="user123" name="Login" autoFocus></input>
                        <label htmlFor="floatingLogin">Login</label>
                    </div>
                    <div className="my-1 form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="Password"></input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    
                    <div className="w-100 py-2 text-center text-danger">
                        {errorMessage}
                    </div>

                    <button className="my-3 btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <LinkButton text="Create Account" displayLink="Register" 
                        route={Routing.ToRegistration} classes="my-2 btn btn-light w-100 py-2"/>
                    <LinkButton text="Home" displayLink="Home" 
                        route={Routing.ToIndex} classes="btn btn-secondary w-100 py-2"/>
                </form>
            </main>
        </div>
    );

    async function handleLogin(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        const responce = await ApiRequest.Login(formData.get("Login"), formData.get("Password"))
        
        if (Object.keys(responce).length !== 0) {
            navigate(Routing.ToIndex);
            
            setUser(responce['login']);
            setAP(responce['ap']);
            setMoney(responce['money']);
        }
        else {
            setMessage("Wrong login or password");
        }
    }
}

