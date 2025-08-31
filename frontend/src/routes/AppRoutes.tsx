import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rotas Caminhos
import PathRoutes from '../config/RoutesPath';

//Paginas

import NotFound from '../pages/MensagePages/NotFound';
import Login from '../pages/login/Login';

const AppRoutes = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path={PathRoutes.commonPath.login} element={<Login/>}/>
      <Route path={PathRoutes.commonPath.notFound} element={<NotFound/>}/>
    </Routes>
    
  </BrowserRouter>
  </div>
  )
}

export default AppRoutes