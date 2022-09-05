import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "../layout/Layout";
import Catalog from "../components/catalog/Catalog";
import Basket from "../components/basket/Basket";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import NotFoundPage from "../components/notFoundPage/NotFoundPage";
import Auth from "../auth/Auth";
import RequireAuth from "../auth/requireAuth";

const AppRoutes = () => {
    return (
        <>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Catalog/>} />
                    <Route path='basket' element={
                        <RequireAuth>
                            <Basket/>
                        </RequireAuth>} />
                  <Route path='adminPanel' element={
                      <RequireAuth>
                        <AdminPanel/>
                      </RequireAuth>} />
                  <Route path='*' element={<NotFoundPage/>} />
                  <Route path='login' element={<Auth/> }/>
              </Route>
           </Routes>
        </>
    );
};

export default AppRoutes;