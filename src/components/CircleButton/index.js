import { Button} from "./elements";
import { useNavigate } from "react-router-dom";

function CircleButton(props) {
    const navigate = useNavigate();
    return (
        <div className="CircleButton-main">
            <Button color={props.color} onClick={() => navigate("/" + props.route)}>{props.route}</Button>
        </div>
    );
};

export default CircleButton;