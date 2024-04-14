import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompaniesIndex from "../Pages/Companies/CompaniesIndex.jsx";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<CompaniesIndex />} />
            </Routes>
        </BrowserRouter>
    );
}
