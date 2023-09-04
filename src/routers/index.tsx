import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Repository from '../pages/Repository'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/repository" element={<Repository />} />
            </Routes>
        </BrowserRouter>
    )
}
