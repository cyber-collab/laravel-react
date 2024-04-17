import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CompaniesIndex from "../Pages/Companies/CompaniesIndex.jsx";
import CompaniesCreate from "../Pages/Companies/CompaniesCreate.jsx";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<CompaniesIndex/>}/>
                <Route path="/companies/create" element={<CompaniesCreate/>}/>
            </Routes>
        </BrowserRouter>
    );
}
