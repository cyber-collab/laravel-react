import React from 'react';
import {useNavigate} from "react-router-dom";

const CreateButton = ({className}) => {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/companies/create`;
        navigate(path);
    }
    return (
        <div>
            <button
                onClick={routeChange}
                type="button"
                className={className}
            >
                Create
            </button>
        </div>
    );
};

export default CreateButton;
