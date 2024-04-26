import React from "react";
import DeleteButton from "../../UI/DeleteButton.jsx";

const CompanyItem = ({company, fetchCompanies}) => {

    return (
        <tr key={company.id}>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                {company.name}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                {company.email}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                {company.address}
            </td>
            <td className="bg-blue-500 py-2 px-4 rounded ">
                {company.website}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                <DeleteButton
                    companyId={company.id}
                    fetchCompanies={fetchCompanies}
                />
            </td>
        </tr>
    );
};

export default CompanyItem;
