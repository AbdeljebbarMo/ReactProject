import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LIstVoiture from './component/LIstVoiture';
import UpdateVoiture from './UpdateVoiture';
import  'bootstrap/dist/css/bootstrap.css'

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LIstVoiture/>}/>
                <Route path='/update/:id' element={<UpdateVoiture/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
