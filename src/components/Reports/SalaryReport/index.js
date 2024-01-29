import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";

import DownloadMFB from "./DownloadMFB";
import SalaryReport from "./SalaryReport";
import RejectedSalary from "./RejectedSalary";
import { Link } from "react-router-dom";

const AllSalaryReports = () => {
  const [showTab, setShowTab] = useState({
    SalaryReport: true,
    RejectedSalary: false,
    DownloadMFB: false,
  });
  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Salary Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Salary
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
                    className={`${showTab.SalaryReport ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        SalaryReport: true,
                        RejectedSalary: false,
                        DownloadMFB: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Salary Report</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.RejectedSalary ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        SalaryReport: false,
                        RejectedSalary: true,
                        DownloadMFB: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Rejected Salary</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.DownloadMFB ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        SalaryReport: false,
                        RejectedSalary: false,
                        DownloadMFB: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Download MFB</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.SalaryReport && <SalaryReport />}
            {showTab.RejectedSalary && <RejectedSalary />}
            {showTab.DownloadMFB && <DownloadMFB />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSalaryReports;
