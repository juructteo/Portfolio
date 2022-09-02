import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import LeadingPage from './webPages/leadingPage';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Navigate to='/home' replace />} />
                <Route path='/home' element={<LeadingPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;