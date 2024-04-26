import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CompaniesCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");
    const [company, setCompany] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };
    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/api/companies", {
                name,
                email,
                address,
                website,
                company,
            })
            .then((response) => navigate("/dashboard"))
            .catch((error) => setErrors(error.response.data.errors));
    };

    const errorMessage = (field) => {
        return (
            <div className="text-red-600 mt-1">
                {errors?.[field]?.map((message, index) => {
                    return <div key={index}>{message}</div>;
                })}
            </div>
        );
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errorMessage("name")}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errorMessage("email")}
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errorMessage("address")}
            </div>
            <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                </label>
                <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={handleWebsiteChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errorMessage("website")}
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
            >
                Create
            </button>
        </form>
    );
};

export default CompaniesCreate;
