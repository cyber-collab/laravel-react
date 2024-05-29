import React from 'react';
import axios from "axios";

const EditButton = ({companyId, fetchCompanies}) => {

    const editCompany = (event) => {
        event.preventDefault();

        axios.put(`/api/companies/${companyId}`)
            .then(response => {
                fetchCompanies();
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <button
                onClick={editCompany}
                type="button"
                className="bg-gray-800 hover:bg-gray-700 rounded-md text-white px-4 py-2 font-semibold ease-in-out duration-150"
            >
                Edit
            </button>
        </div>
    );
};

export default EditButton;
