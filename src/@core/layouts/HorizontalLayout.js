// ** React Imports
import React, { useState, useEffect,useContext } from "react";

// ** React Imports
import { Outlet } from "react-router-dom";

import '@css_theme/Horizontal.scss'
// ** Core Layout Import
import UILoader from '@components/ui-loader'
import Spinner from '@components/spinner/Loading-spinner'
import {LoaderContext, LoaderProvider} from "@Context/LoaderContext";

// ** Reactstrap Imports
import { Navbar } from "reactstrap";

// ** Configs
import themeConfig from "@configs/themeConfig";

// ** Custom Components
import MenuComponent from "./components/menu/horizontal-menu";


// ------------------------------------------------------------------

import "@src/assets/scss/Theme.scss"
import { useNavigate } from "react-router-dom"
import navigation from "@src/navigation/horizontal";
import axios from "axios"


const HorizontalLayout = (props) => {
  // ** Props


  const navigate = useNavigate()
  
  const check_auth = async () => {
    const domain_url = themeConfig.url
    const token = (localStorage.getItem("token"))
    
    if (token === null | token === "") {
      localStorage.removeItem("token")
      navigate('/Login')
    } else {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
    try {

      const result =  await axios.get(`${domain_url}/statistics`, config)
      const data = result.data
      if (data.status === 429) {
        localStorage.removeItem("token")
        navigate('/Login')
      } else if (data.status === 200) {
      } else {
        localStorage.removeItem("token")
        navigate('/Login')
      }
    } catch (e) {
      
      localStorage.removeItem("token")
      navigate('/Login')
    }
    
    }
  }

  useEffect(() => {
    check_auth()
  }, [])

  
  const {loader_show, setLoaderShow} = useContext(LoaderProvider);
 
  return (
    
    <UILoader blocking={loader_show} loader={<Spinner />}>
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <MenuComponent menuData={navigation} />
      </ul>
    </div>
  </div>
</nav>

   
  {/* Content of the Page */}
  <Outlet />
 

    </div>
</UILoader>
  );
};
export default HorizontalLayout;
