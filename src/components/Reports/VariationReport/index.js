import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";

import CompanyReport from "./CompanyReport";
import EmployeeReport from "./EmployeeReport";
import { Link } from "react-router-dom";

const AllVariationReports = () => {
  const [showTab, setShowTab] = useState({
    CompanyReport: true,
    EmployeeReport: false,
  });

  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Variation Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Variation
              </li>
            </ol>
          </nav>
        </div>
        <div className="div">
          <div className={style.NavDiv}>
            <div className={style.fullCont3}>
              <ul className={style.Nav3}>
              <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.CompanyReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CompanyReport: true,
                        EmployeeReport: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Company Variation Report
                    </span>
                  </a>
                </li>
              <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.EmployeeReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CompanyReport: false,
                        EmployeeReport: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Employee Variation Report
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.CompanyReport && <CompanyReport />}
            {showTab.EmployeeReport && <EmployeeReport />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVariationReports;
