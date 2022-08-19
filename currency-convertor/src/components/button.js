import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Buttons = props => {
    return(
        <div>
            <Button color={props.color}>{props.name}</Button>
        </div>
    )
}

export default Buttons;