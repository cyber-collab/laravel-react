import React from "react";
import axios from "axios";

const DeleteButton = ({companyId, fetchCompanies}) => {
    const deleteCompany = (event) => {
        event.preventDefault();
        if (!window.confirm('Are you sure you want to delete this company?')) {
            return;
        }
        axios.delete(`/api/companies/${companyId}`)
            .then(response => {
                fetchCompanies();
            })
            .catch(error => console.log(error));
    };

    return (
        <button
            onClick={deleteCompany}
            type="button"
            className="bg-gray-800 hover:bg-gray-700 rounded-md text-white px-4 py-2 font-semibold ease-in-out duration-150"
        >
            Delete
        </button>
    );
};

export default DeleteButton;
