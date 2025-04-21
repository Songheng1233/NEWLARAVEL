import React from 'react'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
    <a className="sidebar-brand brand-logo" href="index.html"><img src={logo} alt="logo" /></a>
    <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
  </div>

  <ul className="nav">
    <li className="nav-item profile">
      <div className="profile-desc">
        <div className="profile-pic">
          <div className="count-indicator">
            <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt />
            <span className="count bg-success" />
          </div>
          <div className="profile-name">
            <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
            <span>Gold Member</span>
          </div>
        </div>
        <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></a>
        <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
          <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-settings text-primary" />
              </div>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-onepassword  text-info" />
              </div>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
            </div>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-calendar-today text-success" />
              </div>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
            </div>
          </a>
        </div>
      </div>
    </li>
    <li className="nav-item menu-items">
    <Link to={"/admin/Dashboard"} className="nav-link">

        <span className="menu-icon">
          <i className="mdi mdi-table-large" />
        </span>
        <span className="menu-title">Dashboard</span>
    </Link>

    </li>
    <li className="nav-item menu-items">
    <Link to={"/admin/product"} className="nav-link">

        <span className="menu-icon">
          <i className="mdi mdi-table-large" />
        </span>
        <span className="menu-title">Product</span>
    </Link>

    </li>
  
    <li className="nav-item menu-items">
    <Link to={"/admin/category"} className="nav-link">

        <span className="menu-icon">
          <i className="mdi mdi-table-large" />
        </span>
        <span className="menu-title">Category</span>
    </Link>

    </li>
    <li className="nav-item menu-items">
    <Link to={"/admin/brand"} className="nav-link">

        <span className="menu-icon">
          <i className="mdi mdi-table-large" />
        </span>
        <span className="menu-title">Brand</span>
    </Link>

    </li>
  
    
  </ul>
</nav>


    </>
  )
}

export default Header