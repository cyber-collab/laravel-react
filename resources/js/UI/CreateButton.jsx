import React from 'react';
import {useNavigate} from "react-router-dom";

const CreateButton = ({className}) => {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/companies/create`;
        navigate(path);
    }
    return (
        <button
            onClick={routeChange}
            type="button"
            className={className}>
            Create
        </button>
    );
};

export default CreateButton;
