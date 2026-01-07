import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";


export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
)



}


