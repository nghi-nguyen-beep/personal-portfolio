import { Button, GlobalStyles } from "./elements";
import { useNavigate } from "react-router-dom";

function CircleButton(props) {
    const navigate = useNavigate();
    return (
        <div className="CircleButton-main">
            <GlobalStyles />
            <Button color={props.color} onClick={() => navigate("/" + props.route)}>{props.route}</Button>
        </div>
    );
};

export default CircleButton;