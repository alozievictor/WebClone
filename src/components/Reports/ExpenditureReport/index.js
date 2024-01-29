import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";

import ApprovedExpenditure from "./ApprovedExpenditure";
import DeclinedExpenditure from "./DeclinedExpenditure";
import UnapprovedExpenditure from "./UnapprovedExpenditure";
import { Link } from "react-router-dom";

const AllExpenditureReports = () => {
  const [showTab, setShowTab] = useState({
    ApprovedExpenditure: true,
    DeclinedExpenditure: false,
    UnapprovedExpenditure: false,
  });
  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Expenditure Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Expenditure
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
                    className={`${
                      showTab.ApprovedExpenditure ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ApprovedExpenditure: true,
                        DeclinedExpenditure: false,
                        UnapprovedExpenditure: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Approved Expenditure Report
                    </span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${
                      showTab.UnapprovedExpenditure ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ApprovedExpenditure: false,
                        DeclinedExpenditure: false,
                        UnapprovedExpenditure: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Unapproved Expenditure Report
                    </span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${
                      showTab.DeclinedExpenditure ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        ApprovedExpenditure: false,
                        DeclinedExpenditure: true,
                        UnapprovedExpenditure: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Declined Expenditure Report
                    </span>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.ApprovedExpenditure && <ApprovedExpenditure />}
            {showTab.UnapprovedExpenditure && <UnapprovedExpenditure />}
            {showTab.DeclinedExpenditure && <DeclinedExpenditure />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExpenditureReports;
