/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Admin from "views/examples/Admin";
import Branch from "views/examples/Branch";
import Salary from "views/examples/Salary";
import Expenditure from "views/examples/Expenditure";
import Approval from "views/examples/Approval";
import Request from "views/examples/Request";
import Reports from "views/examples/Reports";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fa fa-th",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/admin",
    name: "Admin",
    icon: "fa fa-users",
    component: <Admin />,
    layout: "/admin",
  },
  {
    path: "/branch",
    name: "Branch",
    icon: "fa fa-map-marker",
    component: <Branch />,
    layout: "/admin",
  },
  {
    path: "/salary",
    name: "Salary Configuration",
    icon: "fa fa-credit-card-alt",
    component: <Salary />,
    layout: "/admin",
  },
  {
    path: "/approval",
    name: "Approval",
    icon: "fa fa-thumbs-up",
    component: <Approval/>,
    layout: "/admin",
  },
  {
    path: "/request",
    name: "Request Settings",
    icon: "fa fa-file",
    component: <Request />,
    layout: "/admin",
  },
  {
    path: "/expenditure",
    name: "Expenditure",
    icon: "fa fa-sitemap",
    component: <Expenditure />,
    layout: "/admin",
  },
  {
    path: "/report",
    name: "Reports",
    icon: "ni ni-bullet-list-67",
    component: <Reports />,
    layout: "/admin",
  },
];
export default routes;
