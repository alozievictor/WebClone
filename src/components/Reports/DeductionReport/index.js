import React, { useState } from "react";
import UserHeader from "components/Headers/UserHeader";
import style from "../../../assets/css/salary.module.css";
import DeductionList from "./DeductionList";
import DeductionPayment from "./DeductionPayment";
import { Link } from "react-router-dom";

const AllDeductionReport = () => {
  const [showTab, setShowTab] = useState({
    DeductionPayment: true,
    DeductionList: false,
  });

  return (
    <div className={style.cont}>
      <UserHeader />
      <div className="container">
        <div className={style.iconCont}>
          <div className="icon-title py-3 border" id="">
            <h1 className="font-bold">Deduction Report</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/admin/report">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Deduction
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
                    className={`${showTab.DeductionPayment ? style.active : ""}`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        DeductionPayment: true,
                        DeductionList: false,
                      }))
                    }
                  >
                    <span className={style.TabText}>
                      Deduction Payment Report
                    </span>
                  </a>
                </li>
                <li className={style.navItem}>
                  <a
                    role="button"
                    className={`${
                      showTab.DeductionList ? style.active : ""
                    }`}
                    id="tab-0"
                    data-toggle="tab"
                    href="#"
                    onClick={() =>
                      setShowTab((prev) => ({
                        ...prev,
                        DeductionPayment: false,
                        DeductionList: true,
                      }))
                    }
                  >
                    <span className={style.TabText}>Deduction List</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 bg-white rounded">
            {showTab.DeductionPayment && <DeductionPayment />}
            {showTab.DeductionList && <DeductionList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDeductionReport;
