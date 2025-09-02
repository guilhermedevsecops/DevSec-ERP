import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rotas Caminhos
import PathRoutes from '../config/RoutesPath';

//Paginas
import NotFound from '../pages/MensagePages/NotFound';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const AppRoutes = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path={PathRoutes.commonPath.login} element={<Login/>}/>
      <Route path={PathRoutes.commonPath.registration} element={<Register/>}/>
      <Route path={PathRoutes.commonPath.notFound} element={<NotFound/>}/>
    </Routes>
    
  </BrowserRouter>
  </div>
  )
}

export default AppRoutes