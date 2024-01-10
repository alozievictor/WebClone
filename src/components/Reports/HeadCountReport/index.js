import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";
import { Link } from "react-router-dom";

import CountByStatus from "./CountByStatus";
import CountByLocation from "./CountByLocation";
import CountByDepartment from "./CountByDepartment";
import CountByGender from "./CountByGender";

const HeadCountReport = () => {
  const [showTab, setShowTab] = useState({
    CountByDepartment: true,
    CountByStatus: false,
    CountByGender: false,
    CountByLocation: false,
  });

  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Head Count Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Head_Count
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
                      showTab.CountByDepartment ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CountByDepartment: true,
                        CountByStatus: false,
                        CountByGender: false,
                        CountByLocation: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Head Count By Department
                    </span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.CountByStatus ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CountByDepartment: false,
                        CountByStatus: true,
                        CountByGender: false,
                        CountByLocation: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Head Count By Status</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.CountByGender ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CountByDepartment: false,
                        CountByStatus: false,
                        CountByGender: true,
                        CountByLocation: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>Head Count By Gender</span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${showTab.CountByLocation ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        CountByDepartment: false,
                        CountByStatus: false,
                        CountByGender: false,
                        CountByLocation: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Head Count By Location
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.CountByDepartment && <CountByDepartment />}
            {showTab.CountByStatus && <CountByStatus />}
            {showTab.CountByGender && <CountByGender />}
            {showTab.CountByLocation && <CountByLocation />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCountReport;
