import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../../DashBoard/DashBoard";

export default function AppRouter() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/DashBoard/*" element={<DashBoard />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};