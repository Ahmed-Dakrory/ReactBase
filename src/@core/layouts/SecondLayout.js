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


const SecondLayout = (props) => {
  // ** Props


  const navigate = useNavigate()
  
  

  
  const {loader_show, setLoaderShow} = useContext(LoaderProvider);
 
  return (
    
    <UILoader blocking={loader_show} loader={<Spinner />}>
    <div className="container">
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button type="button" className="btn btn-primary navbar-brand" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <MenuComponent menuData={navigation} />
      </ul>
    </div>
  </div>
</nav>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Dakrory
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   
  {/* Content of the Page */}
  <Outlet />
 

    </div>
</UILoader>
  );
};
export default SecondLayout;
