import React, {useState, useEffect} from "react";
import axios from "axios";
import CompanyItem from "./CompanyItem";
import CreateButton from "../../UI/CreateButton.jsx";

const CompaniesIndex = () => {
    const [companies, setCompanies] = useState([]);

    const fetchCompanies = () => {
        axios.get('/api/companies')
            .then((response) => setCompanies(response.data.data));
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">
                <CreateButton
                    link={"/companies/create"}
                    className={"px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"}
                >
                    Create
                </CreateButton>
                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead>
                    {/* Table headers */}
                    </thead>
                    <tbody className="table-body">
                    {companies.map(company => (
                        <CompanyItem
                            key={company.id}
                            company={company}
                            fetchCompanies={fetchCompanies} // Pass fetchCompanies function as a prop
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompaniesIndex;
