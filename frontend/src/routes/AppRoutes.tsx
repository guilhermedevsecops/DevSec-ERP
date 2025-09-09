import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rotas Caminhos
import PathRoutes from '../config/RoutesPath';

//Paginas
import NotFound from '../pages/MensagePages/NotFound';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ForgotPassoword from '../pages/forgotPassowrd/ForgotPassoword';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import AppProtectedRoutes from './AppProtectedRoutes';
import Home from '../pages/home/Home';
import Unauthorized from '../pages/MensagePages/Unauthorized';
import LayoutSite from '../pages/layout/LayoutSite';

const AppRoutes = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path={PathRoutes.commonPath.login} element={<Login/>}/>
      <Route path={PathRoutes.commonPath.registration} element={<Register/>}/>
      <Route path={PathRoutes.commonPath.forgotPassword} element={<ForgotPassoword/>}/>
      <Route path={PathRoutes.commonPath.resetPassword} element={<ResetPassword/>}/> 
      <Route path={PathRoutes.commonPath.notFound} element={<NotFound/>}/>
      <Route path={PathRoutes.commonPath.unauthorized} element={<Unauthorized/>}/>

      {/* PROTECTED ROUTES */}
      <Route element={<AppProtectedRoutes allowedRoles={["FINANCEIRO"]} />}>
        <Route element={<LayoutSite/>}>
          <Route path={PathRoutes.protectedPath.home} element={<Home/>}/>
          

        </Route>
      </Route>     
    </Routes>
    
  </BrowserRouter>
  </div>
  )
}

export default AppRoutes