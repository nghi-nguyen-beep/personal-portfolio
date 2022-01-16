import { Button } from "./elements";
import { useNavigate } from "react-router-dom";

function CircleButton(props) {
    const navigate = useNavigate();
    return (
        <Button color={props.color} onClick={() => navigate("/" + props.route)}>{props.route}</Button>
    );
};

export default CircleButton;