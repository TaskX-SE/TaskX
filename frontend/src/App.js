import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/CSS/style.css';
import '../src/CSS/mainstyle.css';
import '../src/CSS/Style1.css';
import '../src/CSS/Style2.css';
import './home-page.css';

// import '../src/Js/vendor.js';
// import '../src/Js/bundle.js';
// import '../src/assets/scripts/sidebar/index.js';
// import '../src/assets/scripts/fullcalendar/index.js';
import {Helmet} from "react-helmet";

class App extends React.Component {
  render() {
  return (
    <div className="App">

            <Helmet>
              <script src="../src/Js/vendor.js" type="text/javascript" />
              <script src="../src/Js/bundle.js" type="text/javascript" />
              <script src="../src/assets/scripts/sidebar/index.js" type="text/javascript" />
              <script src="../src/assets/scripts/fullcalendar/index.js" type="text/javascript" />
            </Helmet>

      <div id="loader">
        <div className="spinner"></div>
      </div>

       <div>
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <div className="peers ai-c fxw-nw">
            <div className="peer peer-greed">
              <a className="sidebar-link td-n" href="index.html">
                <div className="peers ai-c fxw-nw">
                  <div className="peer">
                    <div className="logo">
                      <img src="assets/static/images/logo.png" alt="" />
                    </div>
                  </div>
                  <div className="peer peer-greed">
                    <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="peer">
              <div className="mobile-toggle sidebar-toggle">
                <a href="" className="td-n">
                  <i className="ti-arrow-circle-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="sidebar-menu scrollable pos-r">
          <li className="nav-item mT-30 actived">
            <a className="sidebar-link" href="index.html">
              <span className="icon-holder">
                <i className="c-blue-500 ti-home"></i>
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="email.html">
              <span className="icon-holder">
                <i className="c-brown-500 ti-email"></i>
              </span>
              <span className="title">Email</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="compose.html">
              <span className="icon-holder">
                <i className="c-blue-500 ti-share"></i>
              </span>
              <span className="title">Compose</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="calendar.html">
              <span className="icon-holder">
                <i className="c-deep-orange-500 ti-calendar"></i>
              </span>
              <span className="title">Calendar</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="chat.html">
              <span className="icon-holder">
                <i className="c-deep-purple-500 ti-comment-alt"></i>
              </span>
              <span className="title">Chat</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="charts.html">
              <span className="icon-holder">
                <i className="c-indigo-500 ti-bar-chart"></i>
              </span>
              <span className="title">Charts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar-link" href="forms.html">
              <span className="icon-holder">
                <i className="c-light-blue-500 ti-pencil"></i>
              </span>
              <span className="title">Forms</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="sidebar-link" href="ui.html">
              <span className="icon-holder">
                <i className="c-pink-500 ti-palette"></i>
              </span>
              <span className="title">UI Elements</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="javascript:void(0);">
              <span className="icon-holder">
                <i className="c-orange-500 ti-layout-list-thumb"></i>
              </span>
              <span className="title">Tables</span>
              <span className="arrow">
                <i className="ti-angle-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="sidebar-link" href="basic-table.html">Basic Table</a>
              </li>
              <li>
                <a className="sidebar-link" href="datatable.html">Data Table</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="javascript:void(0);">
              <span className="icon-holder">
                <i className="c-purple-500 ti-map"></i>
              </span>
              <span className="title">Maps</span>
              <span className="arrow">
                <i className="ti-angle-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="google-maps.html">Google Map</a>
              </li>
              <li>
                <a href="vector-maps.html">Vector Map</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="javascript:void(0);">
              <span className="icon-holder">
                <i className="c-red-500 ti-files"></i>
              </span>
              <span className="title">Pages</span>
              <span className="arrow">
                <i className="ti-angle-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="sidebar-link" href="blank.html">Blank</a>
              </li>
              <li>
                <a className="sidebar-link" href="404.html">404</a>
              </li>
              <li>
                <a className="sidebar-link" href="500.html">500</a>
              </li>
              <li>
                <a className="sidebar-link" href="signin.html">Sign In</a>
              </li>
              <li>
                <a className="sidebar-link" href="signup.html">Sign Up</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="javascript:void(0);">
              <span className="icon-holder">
                <i className="c-teal-500 ti-view-list-alt"></i>
              </span>
              <span className="title">Multiple Levels</span>
              <span className="arrow">
                <i className="ti-angle-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item dropdown">
                <a href="javascript:void(0);">
                  <span>Menu Item</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="javascript:void(0);">
                  <span>Menu Item</span>
                  <span className="arrow">
                    <i className="ti-angle-right"></i>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="javascript:void(0);">Menu Item</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Menu Item</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div className="page-container">
      <div className="header navbar">
        <div className="header-container">
          <ul className="nav-left">
            <li>
              <a id="sidebar-toggle" className="sidebar-toggle" href="javascript:void(0);">
                <i className="ti-menu"></i>
              </a>
            </li>
            <li className="search-box">
              <a className="search-toggle no-pdd-right" href="javascript:void(0);">
                <i className="search-icon ti-search pdd-right-10"></i>
                <i className="search-icon-close ti-close pdd-right-10"></i>
              </a>
            </li>
            <li className="search-input">
              <input className="form-control" type="text" placeholder="Search..." />
            </li>
          </ul>
          <ul className="nav-right">
            <li className="notifications dropdown">
              <span className="counter bgc-red">3</span>
              <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                <i className="ti-bell"></i>
              </a>

              <ul className="dropdown-menu">
                <li className="pX-20 pY-15 bdB">
                  <i className="ti-bell pR-10"></i>
                  <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                </li>
                <li>
                  <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">John Doe</span>
                            <span className="c-grey-600">liked your <span className="text-dark">post</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">5 mins ago</small>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">Moo Doe</span>
                            <span className="c-grey-600">liked your
                              <span className="text-dark">cover image</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">7 mins ago</small>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">Lee Doe</span>
                            <span className="c-grey-600">commented on your
                              <span className="text-dark">video</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">10 mins ago</small>
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pX-20 pY-15 ta-c bdT">
                  <span>
                    <a href="" className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications
                      <i className="ti-angle-right fsz-xs mL-10"></i></a>
                  </span>
                </li>
              </ul>
            </li>
            <li className="notifications dropdown">
              <span className="counter bgc-blue">3</span>
              <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                <i className="ti-email"></i>
              </a>

              <ul className="dropdown-menu">
                <li className="pX-20 pY-15 bdB">
                  <i className="ti-email pR-10"></i>
                  <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                </li>
                <li>
                  <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">John Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">5 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data
                              generator for your app...
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">Moo Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">15 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data
                              generator for your app...
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">Lee Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">25 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data
                              generator for your app...
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pX-20 pY-15 ta-c bdT">
                  <span>
                    <a href="email.html" className="c-grey-600 cH-blue fsz-sm td-n">View All Email
                      <i className="fs-xs ti-angle-right mL-10"></i></a>
                  </span>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                <div className="peer mR-10">
                  <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
                </div>
                <div className="peer">
                  <span className="fsz-sm c-grey-900">John Doe</span>
                </div>
              </a>
              <ul className="dropdown-menu fsz-sm">
                <li>
                  <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-settings mR-10"></i>
                    <span>Setting</span>
                  </a>
                </li>
                <li>
                  <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-user mR-10"></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="email.html" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-email mR-10"></i>
                    <span>Messages</span>
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-power-off mR-10"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <main className="main-content bgc-grey-100">
        <div id="mainContent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="bdrs-3 ov-h bgc-white bd">
                  <div className="bgc-deep-purple-500 ta-c p-30">
                    <h1 className="fw-300 mB-5 lh-1 c-white">
                      01<span className="fsz-def">st</span>
                    </h1>
                    <h3 className="c-white">Monday</h3>
                  </div>
                  <div className="pos-r">
                    <button type="button" className="mT-nv-50 pos-a r-10 t-2 btn cur-p bdrs-50p p-0 w-3r h-3r btn-warning">
                      <i className="ti-plus"></i>
                    </button>
                    <ul className="m-0 p-0 mT-20">
                      <li className="bdB peers ai-c jc-sb fxw-nw">
                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);"
                          data-toggle="modal" data-target="#calendar-edit">
                          <div className="peer mR-15">
                            <i className="fa fa-fw fa-clock-o c-red-500"></i>
                          </div>
                          <div className="peer">
                            <span className="fw-600">All Day Event</span>
                            <div className="c-grey-600">
                              <span className="c-grey-700">Nov 01 - </span>
                              <i>Website Development</i>
                            </div>
                          </div>
                        </a>
                        <div className="peers mR-15">
                          <div className="peer">
                            <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-pencil"></i>
                            </a>
                          </div>
                          <div className="peer">
                            <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="bdB peers ai-c jc-sb fxw-nw">
                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);"
                          data-toggle="modal" data-target="#calendar-edit">
                          <div className="peer mR-15">
                            <i className="fa fa-fw fa-clock-o c-blue-500"></i>
                          </div>
                          <div className="peer">
                            <span className="fw-600">All Day Event</span>
                            <div className="c-grey-600">
                              <span className="c-grey-700">Nov 01 - </span>
                              <i>Website Development</i>
                            </div>
                          </div>
                        </a>
                        <div className="peers mR-15">
                          <div className="peer">
                            <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-pencil"></i>
                            </a>
                          </div>
                          <div className="peer">
                            <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="bdB peers ai-c jc-sb fxw-nw">
                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);"
                          data-toggle="modal" data-target="#calendar-edit">
                          <div className="peer mR-15">
                            <i className="fa fa-fw fa-clock-o c-indigo-500"></i>
                          </div>
                          <div className="peer">
                            <span className="fw-600">All Day Event</span>
                            <div className="c-grey-600">
                              <span className="c-grey-700">Nov 01 - </span>
                              <i>Website Development</i>
                            </div>
                          </div>
                        </a>
                        <div className="peers mR-15">
                          <div className="peer">
                            <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-pencil"></i>
                            </a>
                          </div>
                          <div className="peer">
                            <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="bdB peers ai-c jc-sb fxw-nw">
                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);"
                          data-toggle="modal" data-target="#calendar-edit">
                          <div className="peer mR-15">
                            <i className="fa fa-fw fa-clock-o c-green-500"></i>
                          </div>
                          <div className="peer">
                            <span className="fw-600">All Day Event</span>
                            <div className="c-grey-600">
                              <span className="c-grey-700">Nov 01 - </span>
                              <i>Website Development</i>
                            </div>
                          </div>
                        </a>
                        <div className="peers mR-15">
                          <div className="peer">
                            <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-pencil"></i>
                            </a>
                          </div>
                          <div className="peer">
                            <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                              <i className="ti-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div id="full-calendar" className="fc fc-unthemed fc-ltr">
                  <div className="fc-toolbar fc-header-toolbar">
                    <div className="fc-left">
                      <div className="fc-button-group">
                        <button type="button"
                          className="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">
                          month</button><button type="button" className="fc-agendaWeek-button fc-button fc-state-default">
                          week</button><button type="button"
                          className="fc-agendaDay-button fc-button fc-state-default fc-corner-right">
                          day
                        </button>
                      </div>
                    </div>
                    <div className="fc-right">
                      <button type="button"
                        className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled"
                        disabled="">
                        today
                      </button>
                      <div className="fc-button-group">
                        <button type="button" className="fc-prev-button fc-button fc-state-default fc-corner-left">
                          <span className="fc-icon fc-icon-left-single-arrow"></span></button><button type="button"
                          className="fc-next-button fc-button fc-state-default fc-corner-right">
                          <span className="fc-icon fc-icon-right-single-arrow"></span>
                        </button>
                      </div>
                    </div>
                    <div className="fc-center">
                      <h2>March 2021</h2>
                    </div>
                    <div className="fc-clear"></div>
                  </div>
                  <div className="fc-view-container">
                    <div className="fc-view fc-month-view fc-basic-view">
                      <table className="">
                        <thead className="fc-head">
                          <tr>
                            <td className="fc-head-container fc-widget-header">
                              <div className="fc-row fc-widget-header">
                                <table className="">
                                  <thead>
                                    <tr>
                                      <th className="fc-day-header fc-widget-header fc-sun">
                                        <span>Sun</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-mon">
                                        <span>Mon</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-tue">
                                        <span>Tue</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-wed">
                                        <span>Wed</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-thu">
                                        <span>Thu</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-fri">
                                        <span>Fri</span>
                                      </th>
                                      <th className="fc-day-header fc-widget-header fc-sat">
                                        <span>Sat</span>
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </thead>
                        <tbody className="fc-body">
                          <tr>
                            <td className="fc-widget-content">
                              <div className="fc-scroller fc-day-grid-container" style={{overflow: "hidden", height: "669.1px"}}>
                                <div className="fc-day-grid fc-unselectable">
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "111px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                              data-date="2021-02-28"></td>
                                            <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2021-03-01">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-tue fc-past" data-date="2021-03-02">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-wed fc-past" data-date="2021-03-03">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-thu fc-past" data-date="2021-03-04">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-fri fc-past" data-date="2021-03-05">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-sat fc-past" data-date="2021-03-06">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-other-month fc-past" data-date="2021-02-28">
                                              <span className="fc-day-number">28</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-past" data-date="2021-03-01">
                                              <span className="fc-day-number">1</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-past" data-date="2021-03-02">
                                              <span className="fc-day-number">2</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-past" data-date="2021-03-03">
                                              <span className="fc-day-number">3</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-past" data-date="2021-03-04">
                                              <span className="fc-day-number">4</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-past" data-date="2021-03-05">
                                              <span className="fc-day-number">5</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-past" data-date="2021-03-06">
                                              <span className="fc-day-number">6</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td className="fc-event-container">
                                              <a
                                                className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                <div className="fc-content">
                                                  <span className="fc-time">12a</span>
                                                  <span className="fc-title">All Day Event</span>
                                                </div>
                                              </a>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "111px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-past" data-date="2021-03-07">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2021-03-08">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-tue fc-past" data-date="2021-03-09">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-wed fc-past" data-date="2021-03-10">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-thu fc-past" data-date="2021-03-11">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-fri fc-past" data-date="2021-03-12">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-sat fc-past" data-date="2021-03-13">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-past" data-date="2021-03-07">
                                              <span className="fc-day-number">7</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-past" data-date="2021-03-08">
                                              <span className="fc-day-number">8</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-past" data-date="2021-03-09">
                                              <span className="fc-day-number">9</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-past" data-date="2021-03-10">
                                              <span className="fc-day-number">10</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-past" data-date="2021-03-11">
                                              <span className="fc-day-number">11</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-past" data-date="2021-03-12">
                                              <span className="fc-day-number">12</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-past" data-date="2021-03-13">
                                              <span className="fc-day-number">13</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "111px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-past" data-date="2021-03-14">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2021-03-15">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-tue fc-past" data-date="2021-03-16">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-wed fc-past" data-date="2021-03-17">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-thu fc-past" data-date="2021-03-18">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-fri fc-past" data-date="2021-03-19">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-sat fc-past" data-date="2021-03-20">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-past" data-date="2021-03-14">
                                              <span className="fc-day-number">14</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-past" data-date="2021-03-15">
                                              <span className="fc-day-number">15</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-past" data-date="2021-03-16">
                                              <span className="fc-day-number">16</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-past" data-date="2021-03-17">
                                              <span className="fc-day-number">17</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-past" data-date="2021-03-18">
                                              <span className="fc-day-number">18</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-past" data-date="2021-03-19">
                                              <span className="fc-day-number">19</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-past" data-date="2021-03-20">
                                              <span className="fc-day-number">20</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "111px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-past" data-date="2021-03-21">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2021-03-22">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-tue fc-past" data-date="2021-03-23">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-wed fc-past" data-date="2021-03-24">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-thu fc-past" data-date="2021-03-25">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-fri fc-today" data-date="2021-03-26">
                                            </td>
                                            <td className="fc-day fc-widget-content fc-sat fc-future"
                                              data-date="2021-03-27"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-past" data-date="2021-03-21">
                                              <span className="fc-day-number">21</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-past" data-date="2021-03-22">
                                              <span className="fc-day-number">22</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-past" data-date="2021-03-23">
                                              <span className="fc-day-number">23</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-past" data-date="2021-03-24">
                                              <span className="fc-day-number">24</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-past" data-date="2021-03-25">
                                              <span className="fc-day-number">25</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-today" data-date="2021-03-26">
                                              <span className="fc-day-number">26</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-future" data-date="2021-03-27">
                                              <span className="fc-day-number">27</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="fc-event-container" colspan="3">
                                              <a
                                                className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                <div className="fc-content">
                                                  <span className="fc-time">12a</span>
                                                  <span className="fc-title">Long Event</span>
                                                </div>
                                              </a>
                                            </td>
                                            <td rowspan="2"></td>
                                            <td rowspan="2"></td>
                                            <td rowspan="2"></td>
                                            <td className="fc-event-container" rowspan="2">
                                              <a
                                                className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                <div className="fc-content">
                                                  <span className="fc-time">7p</span>
                                                  <span className="fc-title">Birthday Party</span>
                                                </div>
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td></td>
                                            <td></td>
                                            <td className="fc-event-container">
                                              <a
                                                className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                <div className="fc-content">
                                                  <span className="fc-time">4p</span>
                                                  <span className="fc-title">Repeating Event</span>
                                                </div>
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "111px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-future"
                                              data-date="2021-03-28"></td>
                                            <td className="fc-day fc-widget-content fc-mon fc-future"
                                              data-date="2021-03-29"></td>
                                            <td className="fc-day fc-widget-content fc-tue fc-future"
                                              data-date="2021-03-30"></td>
                                            <td className="fc-day fc-widget-content fc-wed fc-future"
                                              data-date="2021-03-31"></td>
                                            <td className="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                              data-date="2021-04-01"></td>
                                            <td className="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                              data-date="2021-04-02"></td>
                                            <td className="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                              data-date="2021-04-03"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-future" data-date="2021-03-28">
                                              <span className="fc-day-number">28</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-future" data-date="2021-03-29">
                                              <span className="fc-day-number">29</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-future" data-date="2021-03-30">
                                              <span className="fc-day-number">30</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-future" data-date="2021-03-31">
                                              <span className="fc-day-number">31</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-other-month fc-future"
                                              data-date="2021-04-01">
                                              <span className="fc-day-number">1</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-other-month fc-future"
                                              data-date="2021-04-02">
                                              <span className="fc-day-number">2</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-other-month fc-future"
                                              data-date="2021-04-03">
                                              <span className="fc-day-number">3</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="fc-event-container">
                                              <a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable"
                                                href="http ://google.com/">
                                                <div className="fc-content">
                                                  <span className="fc-time">12a</span>
                                                  <span className="fc-title">Click for Google</span>
                                                </div>
                                              </a>
                                            </td>
                                            <td></td>
                                            <td className="fc-event-container">
                                              <a
                                                className="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                                <div className="fc-content">
                                                  <span className="fc-time">4p</span>
                                                  <span className="fc-title">Repeating Event</span>
                                                </div>
                                              </a>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="fc-row fc-week fc-widget-content" style={{height: "114px"}}>
                                    <div className="fc-bg">
                                      <table className="">
                                        <tbody>
                                          <tr>
                                            <td className="fc-day fc-widget-content fc-sun fc-other-month fc-future"
                                              data-date="2021-04-04"></td>
                                            <td className="fc-day fc-widget-content fc-mon fc-other-month fc-future"
                                              data-date="2021-04-05"></td>
                                            <td className="fc-day fc-widget-content fc-tue fc-other-month fc-future"
                                              data-date="2021-04-06"></td>
                                            <td className="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                              data-date="2021-04-07"></td>
                                            <td className="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                              data-date="2021-04-08"></td>
                                            <td className="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                              data-date="2021-04-09"></td>
                                            <td className="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                              data-date="2021-04-10"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <thead>
                                          <tr>
                                            <td className="fc-day-top fc-sun fc-other-month fc-future"
                                              data-date="2021-04-04">
                                              <span className="fc-day-number">4</span>
                                            </td>
                                            <td className="fc-day-top fc-mon fc-other-month fc-future"
                                              data-date="2021-04-05">
                                              <span className="fc-day-number">5</span>
                                            </td>
                                            <td className="fc-day-top fc-tue fc-other-month fc-future"
                                              data-date="2021-04-06">
                                              <span className="fc-day-number">6</span>
                                            </td>
                                            <td className="fc-day-top fc-wed fc-other-month fc-future"
                                              data-date="2021-04-07">
                                              <span className="fc-day-number">7</span>
                                            </td>
                                            <td className="fc-day-top fc-thu fc-other-month fc-future"
                                              data-date="2021-04-08">
                                              <span className="fc-day-number">8</span>
                                            </td>
                                            <td className="fc-day-top fc-fri fc-other-month fc-future"
                                              data-date="2021-04-09">
                                              <span className="fc-day-number">9</span>
                                            </td>
                                            <td className="fc-day-top fc-sat fc-other-month fc-future"
                                              data-date="2021-04-10">
                                              <span className="fc-day-number">10</span>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="calendar-edit">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="bd p-15">
                    <h5 className="m-0">Add Event</h5>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label className="fw-500">Event title</label>
                        <input className="form-control bdc-grey-200" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="fw-500">Start</label>
                          <div className="timepicker-input input-icon form-group">
                            <div className="input-group">
                              <div className="input-group-addon bgc-white bd bdwR-0">
                                <i className="ti-calendar"></i>
                              </div>
                              <input type="text" className="form-control bdc-grey-200 start-date" placeholder="Datepicker"
                                data-provide="datepicker" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="fw-500">End</label>
                          <div className="timepicker-input input-icon form-group">
                            <div className="input-group">
                              <div className="input-group-addon bgc-white bd bdwR-0">
                                <i className="ti-calendar"></i>
                              </div>
                              <input type="text" className="form-control bdc-grey-200 end-date" placeholder="Datepicker"
                                data-provide="datepicker" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="fw-500">Event title</label>
                        <textarea className="form-control bdc-grey-200" rows="5"></textarea>
                      </div>
                      <div className="text-right">
                        <button className="btn btn-primary cur-p" data-dismiss="modal">
                          Done
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
        <span>Copyright © 2019 Designed by
          <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a>. All rights reserved.</span>
      </footer>
    </div>
  </div>
    </div>
  );
  }
}

export default App;
