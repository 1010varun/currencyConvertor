import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from "reactstrap";
import "./App1.css"

const InputFileld = props => {
    return(
        <Input className={props.className} placeholder={props.placeHolder} onChange={() => {
            
        }}/>
    );
}

export default InputFileld;
