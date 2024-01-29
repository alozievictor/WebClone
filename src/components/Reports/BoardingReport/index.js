import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";

import OnBoardingReport from "./OnBoardingReport";
import OffBoardingReport from "./OffBoardingReport";
import { Link } from "react-router-dom";

const BoardingReport = () => {
  const [showTab, setShowTab] = useState({
    OnBoardingReport: true,
    OffBoardingReport: false,
  });

  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">On-Boarding Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Boarding
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
                      showTab.OnBoardingReport ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        OnBoardingReport: true,
                        OffBoardingReport: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>On-Boarding Reports</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${
                      showTab.OffBoardingReport ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        OnBoardingReport: false,
                        OffBoardingReport: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Off-Boarding Reports</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.OnBoardingReport && <OnBoardingReport />}
            {showTab.OffBoardingReport && <OffBoardingReport />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingReport;
