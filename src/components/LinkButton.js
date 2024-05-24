import { useNavigate } from "react-router-dom";

export default function LinkButton({text, displayLink, route, classes}) {
    const navigate = useNavigate();
    
    return <a href={displayLink} onClick={handleClick} className={classes}>{text}</a>

    function handleClick(e) {
        e.preventDefault();
        navigate(route);
    }
}

